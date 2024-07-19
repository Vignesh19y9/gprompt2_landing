import React, { useState } from "react";
import video1 from "../assets/SocialFinal.mp4";

const SocialMedia = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col space-y-10 lg:order-2 basis-2/4">
          <div className="text-center  m-10">
            <h2 className="text-4xl tracking-tight font-bold">
              Social Media Content{" "}
              <span className="bg-gradient-to-l from-orange-500 to-orange-300 text-transparent bg-clip-text font-black">
                Sharing{" "}
              </span>
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              No more selecting & copying!
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              Import posts directly from social media
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              Generate AI-driven comments & replies.
            </h2>
            <div className="flex justify-center p-10">
              <div className="  font-light">
                <h2 className="text-blue-500 text-lg text-left ">
                  ➔ Twitter/X
                </h2>
                <h2 className="text-blue-500 text-lg text-left ">➔ LinkedIn</h2>
                <h2 className="text-gray-500 text-lg text-left ">
                  ➔ Facebook (coming soon)
                </h2>
                <h2 className="text-gray-500 text-lg text-left ">
                  ➔ Reddit (coming soon)
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/4">
          <Video videoSrc={video1} className="lg:order-1" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

const Video = ({ videoSrc }) => {
  return (
    <div className="flex  justify-center">
      <video autoPlay loop muted className="rounded-xl " controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
