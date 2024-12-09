import React from "react";
import { Label } from "reactstrap";

const AddProductOnHome = () => {
  return (
    
    <div>
      <div className="border-solid ">
        <h1 className="text-center text-4xl p-2">Add Product On Home Page</h1>
        <div className="flex justify-center w-full mt-10">
  <div className="w-4/5 border-double ">
    <div className="flex  gap-4 rounded-xl	">
      {/* Product Name */}
      <div className="w-96">
        <label
          className="block mb-2 text-sm font-medium"
          htmlFor="productName"
        >
          Product Name
        </label>
        <div className="mb-2 w-full border border-indigo-600 rounded-sm">
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name"
            className="h-8 w-full pl-3 outline-none	"
          />
        </div>
      </div>
      <div className="w-96">
        {/* Product */}
        <label className="block mb-2 text-sm font-medium" htmlFor="price">
          Price
        </label>
        <div className="mb-2 w-full border border-indigo-600 rounded-sm	">
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter Price"
            className="h-8 w-full pl-3 outline-none"
          />
        </div>
      </div>
    </div>

    {/* ROW 2 */}
    <div className="flex  gap-4">
      {/* Product Name */}
      <div className="w-96">
        <label
          className="block mb-2 text-sm font-medium"
          htmlFor="productName"
        >
          Product Name
        </label>
        <div className="mb-2 w-full border border-indigo-600 rounded-sm">
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name"
            className="h-8 w-full pl-3 outline-none"
          />
        </div>
      </div>
      <div className="w-96">
        {/* Product */}
        <label className="block mb-2 text-sm font-medium" htmlFor="price">
          Price
        </label>
        <div className="mb-2 w-full border border-indigo-600 rounded-sm">
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter Price"
            className="h-8 w-full pl-3 outline-none	"
          />
        </div>
      </div>
    </div>

    {/* ROW 3 */}
    <div className="flex  gap-4">
      {/* Product Name */}
      <div className="w-96">
        <label
          className="block mb-2 text-sm font-medium"
          htmlFor="productName"
        >
          Product Name
        </label>
        <div className="mb-2 w-full border border-indigo-600 rounded-sm">
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name"
            className="h-8 w-full pl-3 outline-none"
          />
        </div>
      </div>
      <div className="w-96">
        {/* Product */}
        <label className="block mb-2 text-sm font-medium" htmlFor="price">
          Price
        </label>
        <div className="mb-2 w-full border border-indigo-600 rounded-sm	">
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter Price"
            className="h-8 w-full pl-3 outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default AddProductOnHome;
