import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
     <div className="min-h-screen flex items-center justify-center  bg-white">
      <div className="bg-white p-8 rounded-lg ml-5 mr-5 max-w-md w-full">
        <h2 className="text-4xl font-Agatho mb-6 text-center text-Amal-green">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
             className="w-full px-3 py-2 border border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-2xl bg-Amal-green font-Agatho text-white py-2 px-4 "
          >
            Sign Up
          </button>

<div className='text-Amal-green flex justify-center items-center mt-7 text-xs md:text-lg'>
<Link to={'/login'}></Link>
</div>
        </form>
      </div>
    </div>
    </>
   
  );
};

export default Signup;
