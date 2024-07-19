import video1 from "../assets/Overall.mp4";
import DownloadButton from "./DownloadButton";

const HeroSection = () => {
  return (
    <div className=" p-10">
      {/* bg-gradient-to-r from-gray-500 to-gray-900 */}
      <div className="max-w-7xl mx-auto  lg:flex lg:flex-row items-center lg:space-x-8">
        <div className="flex flex-col  basis-2/4">
          <Heading />
          <p className="text-xl text-gray-500 text-center max-w-4xl tracking-wide font-light pt-10">
            Boost your productivity by harnessing the full power of ChatGPT
          </p>

          <div>
            <DownloadButton />
            <div className="flex justify-center">
              <a
                href="https://www.producthunt.com/posts/gprompt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gprompt"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=471329&theme=light"
                  alt="Gprompt - Save&#0032;time&#0032;with&#0032;prompt&#0032;automation | Product Hunt"
                  // style="width: 250px; height: 54px;"
                  width="250"
                  height="54"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="basis-2/4">
          <Video videoSrc={video1} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const Heading = () => {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-tight font-bold">
      <span className="bg-gradient-to-r bg-clip-text">Save</span>
      <span
        className="bg-gradient-to-r text-transparent bg-clip-text font-extrabold tracking-light"
        style={{
          backgroundImage: "linear-gradient(to bottom,#ff7b00, #ff7756)",
        }}
      >
        {" "}
        Time{" "}
      </span>
      with Prompt
      <div>
        <span className="h-14 bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text font-extrabold ">
          {" "}
          Automation{" "}
        </span>
        for ChatGPT
      </div>
    </h1>
  );
};

const Video = ({ videoSrc }) => {
  return (
    <div className="mt-5">
      <video autoPlay loop muted className="rounded-xl " controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
