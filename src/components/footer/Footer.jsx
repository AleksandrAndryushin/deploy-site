import React from "react";
import Navigation from "../navigation/Navigation";
import Social from "../social/Social";
import "./style.css";

const Header = () => {
  return (
    <footer>
      <Social></Social>
      <Navigation></Navigation>
    </footer>
  );
};

export default Header;
