import React, { useState } from "react";
const Questions = () => {
  const handleSubscribeClick = () => {
    // Navigate to the specified URL
    window.location.href = "https://pixease.ck.page/e5b3582635";
  };

  return (
    <div className="bg-gradient-to-l from-gray-900 to-gray-800 p-5">
      {" "}
      <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-normal font-bold">
        Get efficent with{" "}
        <span className="bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text ">
          Prompt Templates{" "}
        </span>{" "}
      </h2>
      <div className=" flex justify-center text-white py-10">
        <div>
          <h2 className="text-lg  text-left tracking-wide ">
            • Using prompts daily?
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            • Saving personal prompts in a note-taking app?
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            • Tired of copying social media contents to ChatGPT everytime?
          </h2>
          <h2 className="text-lg  text-left tracking-wide  pt-10">
            • Creating and reusing prompts has never been simpler!
          </h2>
          <h2 className="text-lg  text-left tracking-wide ">
            • Gpromt allows you to get the most out of your daily prompt
            workflow.
          </h2>
        </div>
      </div>
    </div>
  );
};

// return (
//   <div className="bg-gradient-to-l from-gray-900 to-gray-800 p-20">
//     <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-normal font-bold">
//       Get efficent with{" "}
//       <span className="bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text ">
//         Prompt Templates{" "}
//       </span>
//     </h2>
//     {/* Button */}

//     <div className="text-center text-white flex-col justify-center">
//       <p className="text-left">Do you write prompts daily?</p>
//       <p className="text-left">
//         Are you saving personal prompts in a note-taking app?
//       </p>
//       <p className="text-left">
//         Tired of copying social media contents to ChatGPT everytime?
//       </p>
//       <p className="text-left">
//         Gpromt allows you to get the most out of your daily prompt workflow.
//         <br />
//         Creating and reusing prompts has never been simpler!
//       </p>
//     </div>
//   </div>
// );
// };

export default Questions;
