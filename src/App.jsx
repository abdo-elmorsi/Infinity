import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { t } = useTranslation();
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navigation />

      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Pricing data={landingPageData.Pricing} />
      <Contact data={landingPageData.Contact} />

      <a href={`https://web.whatsapp.com/send?text=${t("whats_app_message_key")}&phone=+971568599461`}>
        <img className="whatsApp" src="/img/whatsApp.png" alt="whatsApp" />
      </a>
    </div>
  );
};

export default App;
