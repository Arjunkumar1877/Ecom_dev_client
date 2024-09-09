import React, { useState } from 'react';
import './../../styles/fonts.css';
import { signInWithGoogle } from '../../config/firebase';
import Header from '../../components/user/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/user/Footer';
import OAuth from '../../components/user/OAuth';

function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleGoogleLogin = async () => {
        const user = await signInWithGoogle();
        if (user) {
            console.log("User logged in:", user)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="flex items-center justify-center mb-6  bg-white">
                <div className="bg-white ml-5 mr-5  rounded-lg max-w-md w-full p-8">
                    <h2 className="flex font-sans text-4xl mb-10 justify-center text-Amal-green">Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                            <div className='mt-1 text-sm hover:text-Amal-green'>
                                <Link><p>Forgot password?</p></Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between">
                            <button
                                type="submit"
                                className="w-full font-sans bg-Amal-green text-white py-2 px-4"
                            >
                                Login
                            </button>
                            <p className='text-sm mt-4'>Don't Have an Account?<span className='hover:text-Amal-green cursor-pointer'><Link to={'/signup'}> Register Now!</Link> </span></p>
                        </div>

                        <div className="relative flex items-center justify-center my-6">
                            <hr className="border-gray-300 w-full" />
                            <span className="absolute bg-white px-2 text-gray-500">or</span>
                        </div>

                    </form>
                    <div className="flex items-center justify-center mt-10  ">
                       <OAuth/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
