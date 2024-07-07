import React, { useState } from "react";
const Questions = () => {
  const handleSubscribeClick = () => {
    // Navigate to the specified URL
    window.location.href = "https://pixease.ck.page/e5b3582635";
  };

  return (
    <div className="bg-gradient-to-l from-gray-900 to-gray-800 p-20">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-tight font-bold">
        Get efficent with ChatGPT{" "}
        <span className="bg-gradient-to-l from-orange-500 to-red-800 text-transparent bg-clip-text ">
          prompts{" "}
        </span>
      </h2>
      {/* Button */}
      <div className="flex justify-center mt-6"></div>
      <div className="text-center">
        <p className="text-left">Do you write prompts daily?</p>
        <p className="text-left">
          Are you saving personal prompts in a note-taking app?
        </p>
        <p className="text-left">
          Tired of copying social media contents to ChatGPT everytime?
        </p>
        <p className="text-left">
          Gpromt allows you to get the most out of your daily prompt workflow.
          <br />
          Creating and reusing prompts has never been simpler!
        </p>
      </div>
    </div>
  );
};

export default Questions;
