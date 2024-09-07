import React, { useState } from 'react';
import './../../styles/fonts.css';
import { signInWithGoogle } from '../../config/firebase';

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
        if(user){
            console.log("User logged in:", user)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white ml-5 mr-5  rounded-lg max-w-md w-full p-8">
                <h2 className="flex font-Agatho text-4xl font-bold mb-20 justify-center text-Amal-green">Login</h2>

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
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full font-Agatho bg-Amal-green text-white py-2 px-4"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
