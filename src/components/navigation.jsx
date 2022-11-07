import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const languages = [
  {
    key: "222",
    code: "en",
    text: "English",
    name: "English",
    country_code: "gb",
  },
  {
    key: "111",
    code: "ar",
    text: "Arabic",
    dir: "rtl",
    country_code: "ar",
    name: "Arabic",
  },
];

export const Navigation = (props) => {
  const { t } = useTranslation();
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (l) => l.code === currentLanguageCode
  );
  useEffect(
    (_) => {
      document.body.dir = currentLanguage?.dir || "ltr";
    },
    [currentLanguage?.dir]
  );
  return (
    <nav id='menu' className="navbar navbar-default navbar-expand-lg navbar-light  fixed-top">
      <div className='container'>
        <div className="navbar-header w-100  d-flex justify-content-between">
          <a className="navbar-brand page-scroll" href="#">
            <img width={130} height={45} src="/img/logo.png" alt="logo" />
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse w-100 justify-content-end" id="navbarNav">
          <ul className="nav navbar-nav navbar-right d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">{t("features_key")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">{t("pricing_key")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">{t("contact_key")}</a>
            </li>
            {currentLanguageCode === "ar" ? (
              <li
                onClick={() => {
                  i18next.changeLanguage("en");
                }}
              >
                english
                {/* <img
                  name="en"
                  src={"https://flagcdn.com/us.svg"}
                  width={27}
                  alt="en"
                /> */}
              </li>
            ) : (
              <li
                onClick={() => {
                  i18next.changeLanguage("ar");
                }}
              >
                عربي
                {/* <img
                  name="ar"
                  src={"https://flagcdn.com/eg.svg"}
                  width={27}
                  alt="ar"
                /> */}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
