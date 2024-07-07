import React, { useState } from "react";
import video1 from "../assets/CuztomiseFinal.mp4";

const Customize = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col space-y-10 ">
          <div className="text-center space-y-4 m-10">
            <h2 className="text-4xl tracking-tight font-bold">
              <span className="bg-gradient-to-l from-pink-500 to-pink-300 text-transparent bg-clip-text font-black">
                Customize{" "}
              </span>
              Your AI Writing Experience{" "}
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              Tweak templates just the way you like
            </h2>
            <h2 className="text-gray-400 text-lg tracking-wide">
              Adjust voice tone, writing styles, and even languages to match
              what you're after.
            </h2>
          </div>
        </div>
        <Video videoSrc={video1} />
      </div>
    </div>
  );
};

export default Customize;

const Video = ({ videoSrc }) => {
  return (
    <div className="flex  justify-center">
      <video
        autoPlay
        loop
        muted
        className="rounded-xl shadow-2xl border border-gray-700"
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
