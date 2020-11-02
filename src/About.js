import React from "react";
import Headshot from "/Users/stephen/portfolio-2/src/media/HeadShot.png";
import "./About.css";
import Nav from "./Nav";
function About() {
  return (
    <div className="about">
      <Nav />
      <h3>About Me</h3>

      <div className="about__content">
        <div className="about__image">
          <img src={Headshot} alt="" />
        </div>

        <div className="about__texts">
          <p>
            The journey for me started a few years ago in 2016. I was browsing
            the web when I came across a video about a whale in a gymnasium. It
            turns a company called Magic Leap were developing augmented reality
            glasses. I decided to visit the website to see what technologies
            were used to develop this experience. Once the site loaded, I was
            amazed by the level of creativity and interactivity the website had.
            It was then I knew this is where I wanted my life work to be. After
            years of sitting on the sidelines learning about the spatial web
            augmented and virtual reality. I decided to take the leap and to
            enroll in Flatiron coding Bootcamp. Which lead me here a Front-End
            developer with a passion for creating websites and AR VR
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
