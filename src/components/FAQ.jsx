import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion/dist/framer-motion'

export const FAQ = React.forwardRef((props, ref) => {

  const { t } = useTranslation();
  return (
    <div id='faq' className='text-center'>
      <div className="container">
        <div className='section-title'>
          <h2>{t("faq_key")}</h2>
        </div>
        {props?.data?.length ? props.data.map((q, i) => {
          return <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: `1.${i * 5}` }}
            viewport={{ root: ref }}
            key={i} className="card shadow-sm"
          >
            <div className="card-header d-flex justyfy-content-start " id="headingTwo">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#collapseTwo${i}`} aria-expanded="false" aria-controls={`collapseTwo${i}`}>
                <h5 className="mb-0">
                  {t(q.question)}
                </h5>
              </button>
            </div>
            <div id={`collapseTwo${i}`} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body d-flex justyfy-content-start">
                {t(q.answer)}
              </div>
            </div>
          </motion.div>
        }) : null}
      </div>
    </div>
  )
});
