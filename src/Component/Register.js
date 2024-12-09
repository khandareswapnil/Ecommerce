import React from "react";
import  { useState } from "react";


const Register =()=>
{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact:"",
        dob:"",
        password: "",
      });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if(!formData.contact) newErrors.contact="contact is required";
        if(!formData.dob) newErrors.dob="contact is DOB";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address.";
        if (!formData.password) newErrors.password = "Password is required.";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          console.log("Form submitted successfully", formData);
        }
      };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-2xl">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded shadow-md"
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Register</h2>

        {/* Name Field */}
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-1 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-1 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        {/* Contact Number Field */}
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium" htmlFor="password">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full p-1 border rounded ${
              errors.contact ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.contact && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>{/* Date Of Birth Field */}
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium" htmlFor="password">
            DOB
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`w-full p-1 border rounded ${
              errors.dob ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.dob}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-1 border rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-1 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
        
    )
}

export default Register;