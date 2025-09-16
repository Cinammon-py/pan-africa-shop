import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

export default function Auth() {
    const [mode, setMode] = useState("login");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login({
            name: mode === "signup" ? formData.name : "User",
            email: formData.email
        });
        navigate('/');
        alert(`${mode === "login" ? "Logged in" : "Signed up"} successfully!`);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side with hero image */}
            <div
                className="hidden md:flex md:w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/auth.jpg')" }}
            >
                <div className="bg-earthgreen/70 w-full flex items-center justify-center text-center px-6">
                    <h2 className="text-4xl font-bold text-beige leading-snug">
                        Discover Africa’s Flavors <br />
                        <span className="text-white">With a Single</span> <span className="text-black">Click</span>
                    </h2>
                </div>
            </div>

            {/* Right side form */}
            <div className="flex-1 flex items-center justify-center bg-beige px-6">
                <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
                    {/* Toggle buttons */}
                    <div className="flex mb-8 border-b">
                        <button
                            onClick={() => setMode("login")}
                            className={`flex-1 py-2 text-lg font-semibold ${mode === "login"
                                    ? "text-earthgreen border-b-4 border-earthgreen"
                                    : "text-gray-500 hover:text-earthgreen"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setMode("signup")}
                            className={`flex-1 py-2 text-lg font-semibold ${mode === "signup"
                                    ? "text-earthgreen border-b-4 border-earthgreen"
                                    : "text-gray-500 hover:text-earthgreen"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {mode === "signup" && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <div className="flex items-center border rounded-lg px-3">
                                    <User className="w-5 h-5 text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="flex-1 py-2 outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="flex items-center border rounded-lg px-3">
                                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your Email"
                                    required
                                    className="flex-1 py-2 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="flex items-center border rounded-lg px-3">
                                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    className="flex-1 py-2 outline-none"
                                />
                            </div>
                        </div>

                        {mode === "signup" && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <div className="flex items-center border rounded-lg px-3">
                                    <Lock className="w-5 h-5 text-gray-400 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        className="flex-1 py-2 outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-earthgreen text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                        >
                            {mode === "login" ? "Login" : "Create Account"}
                        </button>
                    </form>

                    {/* Footer links */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        {mode === "login" ? (
                            <>
                                Don’t have an account?{" "}
                                <button
                                    onClick={() => setMode("signup")}
                                    className="text-earthgreen font-semibold hover:underline"
                                >
                                    Sign up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button
                                    onClick={() => setMode("login")}
                                    className="text-earthgreen font-semibold hover:underline"
                                >
                                    Login
                                </button>
                            </>
                        )}
                    </div>

                    <div className="mt-6 text-center">
                        <Link
                            to="/"
                            className="text-sm text-gray-500 hover:text-earthgreen transition"
                        >
                            ← Continue as guest
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
