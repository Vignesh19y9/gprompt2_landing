import React, { useState, useEffect } from "react";
import video1 from "../assets/CreateFinal.mp4";
import DownloadButton from "./DownloadButton";

const Workflow = () => {
  return (
    <div>
      <div className="py-10">
        <div className="py-10">
          <h1 className="text-center text-3xl font-bold mb-6">
            <span className="bg-gradient-to-l from-orange-500 to-yellow-300 text-transparent bg-clip-text font-black">
              Easy{" "}
            </span>
            Template Creation & {""}
            <span className="bg-gradient-to-l from-orange-500 to-yellow-300 text-transparent bg-clip-text font-black">
              Editing{" "}
            </span>
          </h1>

          <h2 className="text-gray-400 text-lg tracking-wide text-center">
            Can't find the perfect template?
          </h2>
          <h2 className="text-gray-400 text-lg tracking-wide text-center">
            No worries! Craft your own effortlessly for your needs.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
          <div className="flex flex-col space-y-10">
            <div className="text-center space-y-4 m-10">
              <PromptTemplate />
              <DownloadButton />
            </div>
          </div>
          <Video videoSrc={video1} />
        </div>
      </div>
    </div>
  );
};

export default Workflow;

const PromptTemplate = () => {
  const [content, setContent] = useState("");
  const phrases = [
    "Career",
    "Sports",
    "Beauty",
    "Family",
    "Travel",
    "Health",
    "Nature",
  ];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#888" }}>Prompt template</h2>

      <div style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>
        Write a blog post on the topic{" "}
        <span style={{ backgroundColor: "gray", color: "white" }}>
          #content#{" "}
        </span>
      </div>

      <div style={{ fontSize: "48px", margin: "20px 0" }}>+</div>

      <h2 style={{ color: "#888" }}>Main content</h2>

      <div style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>
        <span style={{ color: "orange" }}>{content}</span>
      </div>

      <div style={{ fontSize: "48px", margin: "20px 0" }}>=</div>

      <h2 style={{ color: "#888" }}>Final prompt</h2>

      <div style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>
        Write a blog post on the topic{" "}
        <span style={{ color: "orange" }}>{content}</span>
      </div>
    </div>
  );
};

// export default PromptTemplate;

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
