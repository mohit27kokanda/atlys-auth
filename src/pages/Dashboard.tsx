// src/pages/Dashboard.tsx

import React, { useState } from "react";
import Signup from "./Signup";
import { posts } from "../utils";

const Dashboard: React.FC = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handlePost = () => {
    setSignupOpen(true);
  };

  const closeSignup = () => {
    setSignupOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold">Hello Jane</h1>
        <p className="mt-2 text-gray-400">
          How are you doing today? Would you like to share something with the
          community? 😊
        </p>

        <div className="p-4 mt-8 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold">Create post</h2>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="How are you feeling today?"
              className="flex-1 px-4 py-2 text-gray-300 bg-gray-700 rounded"
            />
            <button
              onClick={handlePost}
              className="px-6 py-2 ml-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
            >
              Post
            </button>
          </div>
        </div>

        {posts.map((post) => (
          <div className="p-6 mt-8 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{post.name}</p>
                    <p className="text-sm text-gray-400">{post.duration}</p>
                  </div>
                  <div className="text-gray-400">...</div>
                </div>
                <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl"> {post.body.emoji}</span>
                    <p className="ml-3 text-gray-300">
                      {post.body.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3333 3.83333L2.66662 3.83336C1.8382 3.83336 1.16663 4.50493 1.16663 5.33336V13.3334C1.16663 14.1618 1.8382 14.8334 2.66662 14.8334H10C10.1326 14.8334 10.2598 14.886 10.3536 14.9798L13.5 18.1262V15.3334C13.5 15.0572 13.7238 14.8334 14 14.8334H17.3333C18.1617 14.8334 18.8333 14.1618 18.8333 13.3334V5.33333C18.8333 4.5049 18.1617 3.83333 17.3333 3.83333ZM2.66662 2.83336L17.3333 2.83333C18.714 2.83333 19.8333 3.95262 19.8333 5.33333V13.3334C19.8333 14.7141 18.714 15.8334 17.3333 15.8334H14.5V19.3333C14.5 19.5356 14.3781 19.7179 14.1913 19.7953C14.0045 19.8727 13.7894 19.8299 13.6464 19.6869L9.79289 15.8334H2.66662C1.28591 15.8334 0.166626 14.7141 0.166626 13.3334V5.33336C0.166626 3.95265 1.28591 2.83336 2.66662 2.83336Z"
                      fill="#C5C7CA"
                    />
                  </svg>

                  <span>{post.comment_count} comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isSignupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-gray-800 p-8 rounded-lg w-full max-w-md">
            <button
              onClick={closeSignup}
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

export default Dashboard;
