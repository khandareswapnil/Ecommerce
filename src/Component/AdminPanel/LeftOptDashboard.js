import React from "react";
import { Link } from "react-router-dom";

const LeftOptDashboard = () => {
  return (
    <>
      <div>
        <ul>
        <li className="border-2 border-indigo-600 p-4">
            <Link to="addproductonhome">Add Product On Home Page</Link>
          </li>
          <li className="border-2 border-indigo-600 p-4">
            <Link to="addproductonmain">Add Product On Main Page</Link>
          </li>
          <li className="border-2 border-indigo-600 p-4">
            <Link to="viewproducthome">View Product at Home</Link>
          </li>
          <li className="border-2 border-indigo-600 p-4">
            <Link to="viewproductmain">View Product at Main Page</Link>
          </li>
          <li className="border-2 border-indigo-600 p-4">
            <Link to="viewalluser">View All User</Link>
          </li>

          <li></li>
        </ul>
      </div>
    </>
  );
};
export default LeftOptDashboard;
