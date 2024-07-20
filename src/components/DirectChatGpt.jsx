import React from "react";
import im1 from "../assets/ChatGPTPW.png";

const DirectChatGpt = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col space-y-10 lg:order-2 basis-2/4">
          <div className="text-center m-10">
            <h2 className="text-4xl tracking-tight font-bold">
              Send Prompts{" "}
              <span className="bg-gradient-to-l from-orange-500 to-orange-400 text-transparent bg-clip-text font-black">
                Directly{" "}
              </span>
              to ChatGPT
            </h2>
            <div className="p-10">
              <h2 className="text-gray-400  text-lg tracking-wide">
                Your prompts go directly to your personal ChatGPT account
              </h2>
              <h2 className="text-gray-400  text-lg tracking-wide">
                No middlemen, just your prompts and ChatGPT.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:order-1 basis-2/4">
          <img
            src={im1}
            alt="Social Media Content Sharing"
            className="rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default DirectChatGpt;
