import React from "react";
import "./HeaderContanier.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

function HeaderContanier() {
  return (
    <div className="header">
      <h1>HELLO</h1>
      <div className="header__bottom">
        <div className="header__logos">
          <div>
            <a href="https://www.linkedin.com/in/stephen-plummer-9bb4b1153/">
              <LinkedInIcon className="header__logo" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/StephenPlummer0">
              <TwitterIcon className="header__logo" />
            </a>
          </div>

          <div>
            <a href="https://github.com/007Steve">
              <GitHubIcon className="header__logo" />
            </a>
          </div>
        </div>

        <div className="header__scroll">
          <div className="header__textContainer">
            <p>Scroll</p>
          </div>

          <div className="header__scrollLine"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContanier;
