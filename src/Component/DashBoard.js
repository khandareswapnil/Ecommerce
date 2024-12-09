import React from "react";
import { Link } from "react-router-dom";


const Dashboard=()=>
    {
        return (
            <>
           <div className="h-screen">
           <div className="grid grid-rows-1 border-solid border-2 border-indigo-600 p-2 h-16 translate-y-2	">
                <div className=" grid grid-cols-1 ">
                    <h1 className="text-center font-medium text-2xl">Welocome to Ecommerce.</h1>
                </div>
                </div>
                

                <div className="flex mt-5 w-screen text-center h-5/6 translate-y-8">
                    <div className="border-solid border-2 border-indigo-600  w-1/4 text-xl text-yellow-500 font-medium bg-indigo-500">                      
                     <ul >
                            <li className="border-2 border-indigo-600 p-4"><Link to="/addproducttohome">Add Product On Home Page</Link></li>
                            <li className="border-2 border-indigo-600 p-4"><Link to="/addproducttomain">Add Product on Main Page</Link></li>
                            <li className="border-2 border-indigo-600 p-4"><Link to="/viewuser">View All User</Link></li>
                            
                            <li></li>
                        </ul>
                    </div>
                    <div className=" border-solid border-2 border-indigo-600 w-3/4	">2</div>
                </div>
           </div>
                        
            </>
        )

    }
    export default Dashboard;