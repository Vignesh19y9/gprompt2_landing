import video1 from "../assets/Overall.mp4";
import DownloadButton from "./DownloadButton";

const HeroSection = () => {
  return (
    <div className=" py-10">
      {/* bg-gradient-to-r from-gray-500 to-gray-900 */}
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col space-y-10">
          <Heading />
          <p className="text-xl text-gray-500 text-center max-w-4xl tracking-wide font-light">
            Harness the full power of ChatGPT with seamless and creative
            prompts.
          </p>
          <DownloadButton />
        </div>
        <Video videoSrc={video1} />
      </div>
    </div>
  );
};

export default HeroSection;

const Heading = () => {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-tight font-bold">
      <span className="bg-gradient-to-r bg-clip-text">Your</span>
      <span
        className="bg-gradient-to-r text-transparent bg-clip-text font-extrabold tracking-light"
        style={{
          backgroundImage: "linear-gradient(to bottom,#ff7b00, #ff7756)",
        }}
      >
        {" "}
        Ultimate{" "}
      </span>
      ChatGPT
      <div>
        <span className="h-14 bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text font-extrabold ">
          {" "}
          Prompt{" "}
        </span>
        Companion
      </div>
    </h1>
  );
};

const Video = ({ videoSrc }) => {
  return (
    <div className="flex mt-10 justify-center">
      <video autoPlay loop muted className="rounded-xl w-11/12" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
