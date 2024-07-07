import React from "react";
import im1 from "../assets/ChatGPTPW.png";

const DirectChatGpt = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col space-y-10 lg:order-2">
          <div className="text-center space-y-4 m-10">
            <h2 className="text-4xl tracking-tight font-bold">
              Social Media Content{" "}
              <span className="bg-gradient-to-l from-pink-500 to-pink-300 text-transparent bg-clip-text font-black">
                Sharing{" "}
              </span>
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              No more selecting & copying!
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              Import posts directly from social media. Generate AI-driven
              comments & replies.
            </h2>
            <div className="flex justify-center p-5">
              <div>
                <h2 className="text-lg text-left tracking-wide">Twitter/X</h2>
                <h2 className="text-lg text-left tracking-wide">LinkedIn</h2>
                <h2 className="text-lg text-left tracking-wide">
                  Facebook (coming soon)
                </h2>
                <h2 className="text-lg text-left tracking-wide">
                  Reddit (coming soon)
                </h2>
              </div>
            </div>
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

export default DirectChatGpt;
