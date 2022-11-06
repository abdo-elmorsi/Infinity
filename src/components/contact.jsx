import { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [loading, setloading] = useState(false);
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })
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
        clearState();
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
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
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
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 column">
          <div className="form-group">
            <i className="fa fa-user"></i>
            <input type="text" name="name" placeholder="Full Name" required="" aria-required="true" className="valid" aria-invalid="false" /><label id="name-error" className="error" for="name" style={{ display: "none" }}></label>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 column">
          <div className="form-group">
            <i className="fa fa-envelope"></i>
            <input type="email" name="email" placeholder="E-Mail" required="" aria-required="true" className="error" aria-invalid="true" /><label id="email-error" className="error" for="email">This field is required.</label>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 column">
          <div className="form-group">
            <i className="fa fa-globe"></i>
            <input type="text" name="website" placeholder="main.website" aria-required="true" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 column">
          <div className="form-group">
            <i className="fa fa-phone"></i>
            <input type="text" name="mobile" placeholder="Mobile" required="" aria-required="true" className="error" /><label id="mobile-error" className="error" for="mobile">This field is required.</label>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 column">
          <div className="form-group">
            <textarea name="comment" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 column">
          <div className="form-group message-btn centred">
            <button type="submit" className="theme-btn-two" name="submit-form">Send </button>
          </div>
        </div>
      </div> */}
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Erp-infinity.
          </p>
        </div>
      </div>
    </div>
  )
}
