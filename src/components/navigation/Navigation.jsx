import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="#Home">Главная</a>
      <a href="#History">История</a>
      <a href="#Blogs">Блоги</a>
      <a href="#Maps">Карта</a>
      <a href="#Epiloge">Конец</a>
    </nav>
  );
};

export default Navigation;
