import React from 'react';
import Header  from './Header';

import  { useState ,useEffect} from "react";


  

const Home=()=>
{
    const images = [
        {
          src: "/1.jpg",
          alt: "Slide 1",
        },
        {
          src: "/2.jpg",
          alt: "Slide 2",
        },
        {
          src: "/3.jpg",
          alt: "Slide 3",
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Auto-rotate every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [images.length]);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    return(
        <>
            <Header />
            <div className="relative mx-auto overflow-hidden h-[500px] p-1">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[500px] p-1">
            <img
              src={image.src}
              alt={image.alt}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#8594;
      </button>
    </div>
        </>
    )
         
    
}

export default Home;