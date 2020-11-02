import React from "react";
import HeaderContanier from "./HeaderContanier";
import Porjects from "./Porjects";
import Contact from "./Contact";
import "./HomePage.css";
import Nav from "./Nav";

function HomePage() {
  return (
    <div className="homePage">
      <Nav />
      <HeaderContanier />
      <Porjects />
      <Contact />
    </div>
  );
}

export default HomePage;
