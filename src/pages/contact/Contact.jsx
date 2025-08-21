import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import styled from "./Contact.module.css";

function Contact() {
  return (
    <div className={styled.contactSection}>
      {/* Left Side - Find Us */}
      <div className={styled.leftContact}>
        <h2 className={styled.findHeading}>Find us</h2>

        <div className={styled.contactCard}>
          <div >
            {/* <img src="/images/phone-icon.png" alt="Phone" /> */}
            <div className={styled.icon}><FaPhoneAlt /></div>
          </div>
          <div>
            <h4>Call Us</h4>
            <p>+08 265 201 888</p>
          </div>
        </div>

        <div className={styled.contactCard}>
          <div >
            {/* <img src="/images/email-icon.png" alt="Email" /> */}
            <div className={styled.icon}><FaEnvelope /></div>
          </div>
          <div>
            <h4>Email Now</h4>
            <p>Hello@procleaning.com</p>
          </div>
        </div>

        <div className={styled.contactCard}>
          <div >
            {/* <img src="/images/location-icon.png" alt="Location" /> */}
            <div className={styled.icon}><FaMapMarkerAlt /></div>
          </div>
          <div>
            <h4>Address</h4>
            <p>7510, Brand Tower, New York, USA</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styled.rightContact}>
        <h5 className={styled.contactInfo}>Contact info</h5>
        <h2 className={styled.formHeading}>Keep In Touch</h2>
        <p className={styled.formText}>
          We prioritize responding to your inquiries promptly to ensure you
          receive the assistance you need in a timely manner
        </p>

        <form className={styled.contactForm}>
          <input type="text" placeholder="Name" className={styled.inputField} />
          <input type="email" placeholder="Email" className={styled.inputField} />
          <textarea placeholder="Message" className={styled.textArea}></textarea>
          <button type="submit" className={styled.sendBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
