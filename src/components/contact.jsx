import React, { useState } from 'react'
import Cookies from 'js-cookie';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion/dist/framer-motion'

const inintial = {
  name: "",
  email: "",
  message: "",
}
export const Contact = React.forwardRef((props, ref) => {
  const lang = Cookies.get("i18next") || "en";
  const { t } = useTranslation();
  const [loading, setloading] = useState(false);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkza1jq",
        "template_wixdosw",
        e.target,
        "user_ycFwwHNWHpDwHFWE3gajU"
      )
      .then((res) => {
        toast.success("Your message has been sent.");
        setState(inintial);
        setloading(false);
      })
      .catch((er) => {
        toast.error("Sorry there is an error.");
        setloading(false);
      });
  };
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className="row">
            <div className='col-md-8'>

              <div className={`section-title ${lang == "en" ? "text-left" : "text-right"}`}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ root: ref }}
                >
                  <h2 className={lang !== "en" ? "right" : ""}>{t("get_in_touch_key")}</h2>
                </motion.div>
                <p>
                  {t("please_fill_out_the_form_below_to_send_us_an_email_and_we_will_get_back_to_you_as_soon_as_possible.")}
                </p>
              </div>
              <form name='sentMessage' validate={true} onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={state?.name}
                        className='form-control'
                        placeholder={t("name_key")}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={state?.email}
                        className='form-control'
                        placeholder={t("email_key")}
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    value={state?.message}
                    className='form-control'
                    rows='4'
                    placeholder={t("message_key")}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>

                <motion.button
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ root: ref }}
                  type='submit' className='d-block btn btn-custom btn-lg'
                >

                  {!loading ? t("send_message_key") : t("loading_key")}
                </motion.button>
              </form>

            </div>
            <div className={`col-md-3 contact-info ${lang == "en" ? "text-left" : "text-right"}`}>
              <div className='contact-item'>
                <h3>{t("contact_info_key")}</h3>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> {t("address_key")}
                  </span>
                  {props.data ? props.data.address : 'loading'}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> {t("phone_key")}
                  </span>{' '}
                  {props.data ? props.data.phone : 'loading'}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> {t("email_key")}
                  </span>{' '}
                  {props.data ? props.data.email : 'loading'}
                </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <motion.li
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ root: ref }}
                    >
                      <a href={props.data ? props.data.facebook : '/'}>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ root: ref }}
                    >
                      <a href={props.data ? props.data.twitter : '/'}>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ root: ref }}
                    >
                      <a href={props.data ? props.data.youtube : '/'}>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </motion.li>


                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});