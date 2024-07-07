import React, { useState } from "react";

const Automate = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-tight font-bold">
        <span className="bg-gradient-to-l from-orange-500 to-orange-300 text-transparent bg-clip-text font-black">
          Automate{" "}
        </span>
        your workflow
      </h2>
      <div className=" flex justify-center p-10">
        <div>
          <p className="text-gray-500">Use Gprompt as:</p>
          <div className="p-3">
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
          </div>
          <h2 className="text-lg  text-left tracking-wide py-3 text-gray-400">
            much more...
          </h2>
        </div>
      </div>
      <h2 className="text-2xl text-center text-gray-500 tracking-tight py-3 font-bold">
        Unlimited Possibilities with Just a Few{" "}
        <span className="bg-gradient-to-l from-orange-500 to-orange-400 text-transparent bg-clip-text font-black">
          Clicks!
        </span>
      </h2>
    </div>
  );
};

export default Automate;
