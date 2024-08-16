import React from "react";
import { Link } from "react-router-dom";
import withModal from "../components/withModal";

const Signup: React.FC<{ closeModal?: () => void }> = ({ closeModal }) => {
  return (
    <div className="text-white">
      <h2 className="mb-4 text-lg font-semibold">SIGN UP</h2>
      <h1 className="mb-6 text-2xl font-bold">Create an account to continue</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 text-gray-900 bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Choose a preferred username"
          className="w-full px-4 py-2 text-gray-900 bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Choose a strong password"
          className="w-full px-4 py-2 text-gray-900 bg-gray-700 rounded"
        />
        <button
          type="submit"
          className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
        >
          Continue
        </button>
      </form>
      <div className="mt-4">
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={closeModal}
          className="text-blue-400 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default withModal(Signup);
