import React from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next"
import { motion } from 'framer-motion/dist/framer-motion'


export const Features = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='section-title mt-5 mt-lg-0 pt-5 pt-lg-0'>
          <h2>{t("features_key")}</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <motion.div
                initial={{ x: i % 2 == 1 ? 100 : -100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ root: ref }}
                key={`${d.title}-${i}`} className='col-12 mb-5'
              >

                <div className="row d-flex  align-items-center">
                  <div className={`col-lg-6 ${i % 2 == 1 ? "order-2" : "order-1"}`}>
                    <img src={d.img} alt={d.title} />
                  </div>
                  <div className={`col-lg-6 ${i % 2 == 1 ? "order-1" : "order-2"}`}>
                    <h2>{t(d.title)}</h2>
                    <ul className="list-unstyled mt-3 mb-4">
                      {d.options.map((c, b) => {
                        return (
                          <li key={b} className={`${lang == "en" ? "text-left" : "text-right"} mb-4`}>{b + 1}: {t(c)}</li>
                        )
                      })}

                    </ul>
                  </div>
                </div>
              </motion.div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div >
  )
});
