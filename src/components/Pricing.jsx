import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion/dist/framer-motion'

export const Pricing = React.forwardRef((props, ref) => {

  const { t } = useTranslation();
  return (
    <div id='pricing' className='text-center'>
      <div className="container">
        <div className='section-title'>
          <h2>{t("pricing_key")}</h2>
        </div>
        <div className="card-deck mb-3 text-center">
          {props.data
            ? props.data.map((d, i) => (
              <motion.div
                initial={{ y: i % 2 == 1 ? 100 : -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ root: ref }}
                key={i}
                className="card mb-4 box-shadow"
              >
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{t(d?.title)}</h4>
                </div>
                <div className="card-body">
                  <h2 className="card-title pricing-card-title">${d.price}</h2>
                  <ul className="list-unstyled mt-3 mb-4">
                    {d.options.map((c) => {
                      return (
                        <li key={c}>{c}</li>
                      )
                    })}

                  </ul>
                </div>
              </motion.div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
});