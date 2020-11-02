import React from "react";
import "./About.css";
import Nav from "./Nav";
function About() {
  return (
    <div className="about">
      <Nav />
      <h3>About Me</h3>

      <div className="about__content">
        <div className="about__image">
          <img src="https://avatars0.githubusercontent.com/u/33614576?s=460&u=76a33555878299c6870eb5e6d114ab92958f56ef&v=4" alt="" />
        </div>

        <div className="about__texts">
          <p>
            My interests for web development started in 2016 when I discovered a
            company called Magic Leap which focuses on developing augmented
            reality experiences through AR glasses. The level of creativity and
            interactiveness that the website had sparked my passion for
            developing the spatial web even further. It was then I knew that this is
            where I wanted my life work to be. After years of sitting on the
            sidelines learning about the spatial web of augmented and virtual
            reality I decided to take the leap and enroll in Flatiron Coding
            Bootcamp to gain the necessary knowledge and skills needed to
            develop applications for the spatial web. This has lead me to this
            point of my journey as a Front-End developer with a passion for
            creating websites and AR/VR experiences.
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
