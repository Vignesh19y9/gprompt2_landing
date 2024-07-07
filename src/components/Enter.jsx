import React, { useState } from "react";
import im1 from "../assets/ChatEnter.png";

const Enter = () => {
  return (
    <div className=" py-10">
      {/* bg-gradient-to-r from-gray-500 to-gray-900 */}
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-col items-center lg:space-x-8">
        <div className="flex flex-col space-y-10">
          <div className="text-center space-y-4 m-10">
            {/* <h2 className="text-4xl tracking-tight font-bold">{title}</h2> */}
            <h2 className="text-gray-400 text-lg tracking-wide">
              Enter = Copy Prompt ➔ Open ChatGpt ➔ Paste ➔ Tap Send
            </h2>
          </div>
        </div>
        <div className="flex justify-center lg:order-1">
          <img
            src={im1}
            alt="Social Media Content Sharing"
            className="rounded-xl shadow-2xl border border-gray-700 max-w-full lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Enter;
