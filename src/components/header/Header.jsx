import React from "react";
import Navigation from "../navigation/Navigation";
import SiteLogo from "../../assets/site-logo.svg";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="name-tag">
        <h1>Свадьба</h1>
        <h2>Александр & Оксана</h2>
      </div>
      <Navigation />
      <img className="logo" alt="Лого" src={SiteLogo}></img>
    </header>
  );
};

export default Header;
