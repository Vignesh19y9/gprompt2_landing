const DownloadButton = () => {
  return (
    <div className="flex justify-center my-10">
      <a href="https://apps.apple.com/us/app/gprompt-ai-chat-prompts/id6451086523">
        <button
          type="button"
          className="text-white dark:hover:text-black bg-[#111]  hover:bg-[#ff7b00]  font-bold rounded-full text-lg px-8 py-3 text-center inline-flex items-center transition-colors duration-300"
          style={{
            boxShadow: "0 0px 60px rgba(181, 80, 0, 0.5)",
          }}
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="apple"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
          Free Download
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
