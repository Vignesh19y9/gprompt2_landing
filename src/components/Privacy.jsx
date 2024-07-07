import React from "react";

const Privacy = () => {
  const fontColor = "#ffff";

  return (
    <div className="p-10">
      <div
        style={{
          textAlign: "center",
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          color: fontColor,
        }}
      >
        <h2 className="text-center text-3xl font-bold m-6">Privacy Policy</h2>
        <p>
          We are pleased that you are using our Gprompt application (hereinafter
          referred to as the "app"). In the following, we will inform you about
          the handling of your personal data when using our app. Personal data
          includes all data with which you can be personally identified.
        </p>

        <h1
          className="text-center text-3xl font-bold m-6"
          style={{
            fontSize: "28px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          How We Handle Your Data
        </h1>
        <ul
          style={{
            textAlign: "left",
            display: "inline-block",
            fontSize: "18px",
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          <li>
            All of your data, including prompts and shared links, are stored
            locally on your app using Local Storage.
          </li>
          <li>
            The entire app runs on your device; we don't have a backend server
            to collect data on the server side.
          </li>
          <li>
            When you send a message on ChatGpt, the app switches to OpenAI's
            ChatGpt web interface.
          </li>
          <li>
            Chat requests and other actions are triggered by JavaScript, and no
            other API requests are performed.
          </li>
          <li>
            Chat requests are handled by ChatGpt, and there is no middle server.
            No one else can see the requests, responses, and their content.
          </li>
          <li>
            Every interaction and data shared on the ChatGpt web interface are
            governed by OpenAI's Privacy Policy.
          </li>
        </ul>

        <h1 className="text-center text-3xl font-bold m-6">Contact</h1>
        <ul
          style={{
            textAlign: "left",
            display: "inline-block",
            fontSize: "18px",
          }}
        >
          <li>
            When contacting us (e.g., via a contact form or email), personal
            data is collected. The data collected when using a contact form can
            be seen from the respective contact form in the app. This data is
            stored and used exclusively for the purpose of answering your
            request or for contacting you and the associated technical
            administration. The legal basis for processing this data is our
            legitimate interest in answering your request in accordance with
            Article 6(1)(f) of the GDPR. If your contact is aimed at concluding
            a contract, the additional legal basis for processing is Art.
            6(1)(b) of the GDPR. Your data will be deleted once your request has
            been processed. This is the case if it can be inferred from the
            circumstances that the facts in question have been finally clarified
            and provided that there are no legal storage obligations to the
            contrary.
          </li>
        </ul>

        <h1 className="text-center text-3xl font-bold m-6">Cookies</h1>
        <ul
          style={{
            textAlign: "left",
            display: "inline-block",
            fontSize: "18px",
          }}
        >
          <li>
            The use of cookies for the process of finding user login state may
            be done entirely in the local storage.
          </li>
        </ul>

        <h1 className="text-center text-3xl font-bold m-6">
          Advertising Partners
        </h1>
        <ul
          style={{
            textAlign: "left",
            display: "inline-block",
            fontSize: "18px",
          }}
        >
          <li>
            Google Ads are used, and they are responsible for their own privacy
            policy.
          </li>
        </ul>

        <ul style={{ fontSize: "18px" }}>
          <li>
            Your privacy is important to us. It is Gprompt's policy to respect
            your privacy regarding any information we may collect from you
            across our app. We only ask for personal information when we truly
            need it to provide a service to you. We collect it by fair and
            lawful means, with your knowledge and consent. We also let you know
            why we're collecting it and how it will be used.
          </li>
        </ul>

        <p className="text-center text-l m-6">
          This policy is effective as of 30 September 2022.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
