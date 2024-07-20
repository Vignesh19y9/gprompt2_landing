import React, { useState, useEffect } from "react";
import video1 from "../assets/CreateFinal.mp4";
import DownloadButton from "./DownloadButton";

const Workflow = () => {
  return (
    <div>
      <div className="py-10">
        <div className="py-10 m-10 basis-2/4">
          <h1 className="text-center text-5xl font-bold mb-6">
            <span className="bg-gradient-to-l from-orange-300 to-orange-500 text-transparent bg-clip-text font-black">
              Easily{" "}
            </span>
            Create{" "}
            <span className="bg-gradient-to-l from-orange-500 to-orange-300 text-transparent bg-clip-text font-black">
              Templates{" "}
            </span>
          </h1>

          {/* <h2 className="text-gray-500 text-lg tracking-wide text-center">
            Can't find the perfect template?
          </h2> */}
          <h2 className="text-gray-500 text-lg tracking-wide text-center">
            Craft your own prompt template effortlessly for all your needs.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
          <div className="flex flex-col space-y-10">
            <div className="text-center space-y-4 m-10">
              <PromptTemplate />
              <DownloadButton />
            </div>
          </div>
          <div className="basis-2/4">
            <Video videoSrc={video1} />
          </div>
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
    <div>
      <h2 className="text-gray-500">Prompt template</h2>
      <div className="text-2xl mb-10 font-bold">
        Write a blog post on the topic{" "}
        <span style={{ backgroundColor: "gray", color: "white" }}>
          #content#{" "}
        </span>
      </div>

      <div style={{ fontSize: "28px", margin: "10px 0" }}>+</div>
      <h2 className="text-gray-500">content</h2>

      <div className="text-2xl mb-10 font-bold">
        <span className="text-orange-500 text-3xl">{content}</span>
      </div>

      <div style={{ fontSize: "28px", margin: "10px 0" }}>=</div>

      <h2 className="text-gray-500">Final prompt</h2>

      <div className="text-2xl mb-10 font-bold">
        Write a blog post on the topic{" "}
        <span className="text-orange-500 text-2xl">{content}</span>
      </div>
    </div>
  );
};

// export default PromptTemplate;

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
