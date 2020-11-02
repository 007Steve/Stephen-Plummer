import React from "react";
import "./Contact.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
function Contact() {
  return (
    <>
      <div className="contact" id="contact-section">
        <h2>CONTACT</h2>

        <div className="contact__formContainer">
          <a href="https://www.linkedin.com/in/stephen-plummer-9bb4b1153/">
            <LinkedInIcon className="contact__icon linkin" fontSize="large" />
          </a>
          <a href="https://twitter.com/StephenPlummer0">
            <TwitterIcon className="contact__icon twitter" fontSize="large" />
          </a>
          <a href="tel:203-360-6814">
            <PhoneIcon className="contact__icon phone" fontSize="large" />
          </a>
          <a href="mailto: stephen.plummer1.sp@gmail.com">
            <EmailIcon className="contact__icon email" fontSize="large" />
          </a>
          <a href="https://github.com/007Steve">
            <GitHubIcon className="contact__icon" fontSize="large" />
          </a>

          <a href="https://www.youtube.com/user/15iball/videos">
            <YouTubeIcon className="contact__icon youtube" fontSize="large" />
          </a>
        </div>

        <div className="contact__footer">
          <p> Copyright © Stephen Plummer</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
