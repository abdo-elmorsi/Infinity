import { useState, useEffect, useRef } from "react";
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
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { t } = useTranslation();
  const Ref = useRef(null);
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  const [scrollPosition, setSrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => setSrollPosition(window.pageYOffset), { passive: true });
    return () => {
      window.removeEventListener('scroll', () => setSrollPosition(window.pageYOffset));
    };
  }, []);


  return (
    <div style={{
      overflowX: "hidden"
    }}>
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
      <Features ref={Ref} data={landingPageData.Features} />
      <Pricing ref={Ref} data={landingPageData.Pricing} />
      <Contact ref={Ref} data={landingPageData.Contact} />
      <FAQ ref={Ref} data={landingPageData.Faq} />
      <Footer />

      {/* whatsApp */}
      <a href={`https://web.whatsapp.com/send?text=${t("whats_app_message_key")}&phone=+971568599461`}>
        <img className="whatsApp" src="/img/whatsApp.png" alt="whatsApp" />
      </a>

      {/* scroll to top */}
      <div className={`go-top-btn rounded ${scrollPosition > 700 ? "active" : ""}`} onClick={() => window.scrollTo(0, 0)}>
        <svg width='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-double-up fa-w-10 fa-2x">
          <path fill="currentColor"
            d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
            className=""></path>
        </svg>
        <svg width='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-double-up fa-w-10 fa-2x">
          <path fill="currentColor"
            d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
            className=""></path>
        </svg>
      </div>
    </div>
  );
};

export default App;
