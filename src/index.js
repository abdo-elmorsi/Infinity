import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const App = React.lazy(() => import('./App'));


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
