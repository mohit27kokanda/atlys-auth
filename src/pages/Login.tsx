// src/pages/Login.tsx

import React, { useState } from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const openSignupModal = () => {
    setSignupOpen(true);
  };

  const closeSignupModal = () => {
    setSignupOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg">
        <h2 className="mb-4 text-lg font-semibold">WELCOME BACK</h2>
        <h1 className="mb-6 text-2xl font-bold">Log into your account</h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="text"
            placeholder="Enter your email or username"
            className="w-full px-4 py-2 bg-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-gray-700 rounded"
          />
          <div className="flex justify-between">
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
          >
            Login now
          </button>
        </form>
        <div className="mt-4">
          Not registered yet?{" "}
          <button
            onClick={openSignupModal}
            className="text-blue-400 hover:underline"
          >
            Register
          </button>
        </div>
      </div>

      {isSignupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-gray-800 p-8 rounded-lg w-full max-w-md">
            <button
              onClick={closeSignupModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>
            <Signup />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
