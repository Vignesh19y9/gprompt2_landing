import React, { useState } from "react";

const Automate = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-tight font-bold">
        <span className="bg-gradient-to-l from-red-500 to-pink-300 text-transparent bg-clip-text font-black">
          Automate{" "}
        </span>
        your workflow
      </h2>
      <div className=" flex justify-center p-5">
        <div>
          Use Gprompt as:
          <h2 className="text-lg  text-left tracking-wide ">
            ➔ Email composer
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            ➔ Comment Creator
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            ➔ Post Repurposer
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            ➔ Grammar Checker
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            ➔ Review Creator
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">➔ Translator</h2>
          <h2 className="text-lg  text-left tracking-wide ">➔ Dictionary</h2>
          <h2 className="text-lg  text-left tracking-wide py-3 ">
            much more...
          </h2>
        </div>
      </div>
      <h2 className="text-lg text-center text-left tracking-wide py-3 ">
        Unlimited Possibilities with Just a Few Clicks!
      </h2>
    </div>
  );
};

export default Automate;
