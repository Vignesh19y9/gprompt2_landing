import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function App() {
  return (
    <footer className=" text-white dark:bg-neutral-910 p-10">
      <div className="flex-row ">
        <div className="flex justify-center  lg:justify-start space-x-5 mb-5">
          <div className="logo">
            <SocialIcon
              url="https://twitter.com/gprompt_app"
              bgColor="black"
              fgColor="white"
              style={{ width: 30, height: 30 }} // Adjust size as needed
            />
          </div>
          <div className="logo">
            <SocialIcon
              url="https://www.linkedin.com/company/96582769"
              bgColor="black"
              fgColor="white"
              style={{ width: 30, height: 30 }} // Adjust size as needed
            />
          </div>
        </div>

        {/* Copyright, Privacy Policy, Terms of Use, and Email */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-2">
          {/* Left side */}

          {/* Center */}
          <a href="mailto:contact@robzapps.com" className="text-neutral-500">
            contact@robzapps.com
          </a>

          {/* Right side */}
          <div className="flex space-x-2">
            <p className="text-neutral-500 text-xs">&copy; 2024 gprompt</p>
          </div>
          <div className="flex space-x-2 text-neutral-500">
            <Link to="/privacy">Privacy</Link>
            <p>|</p>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
