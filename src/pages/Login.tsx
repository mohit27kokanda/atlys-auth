import React from "react";
import { useNavigate, Link } from "react-router-dom";
import withModal from "../components/withModal";

const Login: React.FC<{ closeModal?: () => void }> = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
    if (closeModal) closeModal();
  };

  return (
    <div className="text-white">
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
        <Link
          to="/signup"
          onClick={closeModal}
          className="text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default withModal(Login);
