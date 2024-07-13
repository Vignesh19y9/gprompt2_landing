import React, { useState } from "react";
const NewsLetter = () => {
  const handleSubscribeClick = () => {
    // Navigate to the specified URL
    window.location.href = "https://robsapp1.ck.page/5e91c647e9";
  };

  return (
    <div className="bg-gradient-to-l from-gray-900 to-gray-800 p-20">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-tight font-bold m-10">
        Get latest{" "}
        <span className="bg-gradient-to-l from-orange-500 to-pink-800 text-transparent bg-clip-text ">
          updates{" "}
        </span>
      </h2>
      {/* Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-bold"
          onClick={handleSubscribeClick}
        >
          Join Now
        </button>
      </div>
      {/* Additional Text */}
      <p className="text-center text-gray-400 mt-3">
        Receive updates exclusively when a new Gprompt version is released. No
        spam, guaranteed.
      </p>
    </div>
  );
};

export default NewsLetter;
