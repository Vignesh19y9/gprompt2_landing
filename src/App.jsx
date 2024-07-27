import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import SocialMedia from "./components/SocialMedia";
import Customize from "./components/Customize";
import DirectChatGpt from "./components/DirectChatGpt";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Enter from "./components/Enter";
import NewsLetter from "./components/NewsLetter";
import Questions from "./components/Questions";
import Automate from "./components/Automate";

import DownloadButton from "./components/DownloadButton";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <HeroSection />
            <Questions />
            <Workflow />

            <SocialMedia />
            <Customize />
            <DirectChatGpt />
            <Enter />
            <DownloadButton />
            <Automate />
            <NewsLetter />
            <Footer />
          </div>
        }
      />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default App;
