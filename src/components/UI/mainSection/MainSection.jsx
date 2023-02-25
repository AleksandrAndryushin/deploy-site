import React from "react";
import SocialLink from "../socialLink/SocialLink";
import Main from "../../../assets/json/Main.json";

const MainSection = () => {
  SocialLink();
  const woman = Main["woman"];
  const man = Main["man"];
  const history = Main["history"];
  return (
    <section id="#Main">
      <figure>
        <img src={man["path"]} alt={man["alt"]}></img>
        <figcaption>{man["name"]}</figcaption>
        <div className="social-tab">
          {man["social"].map((item) => {
            return SocialLink(item["link"], item["path"], item["alt"]);
          })}
        </div>
      </figure>
      <h1>&</h1>
      <figure>
        <img src={woman["path"]} alt={woman["alt"]}></img>
        <figcaption>{woman["name"]}</figcaption>
        <div className="social-tab"></div>
      </figure>
      <h2>{history}</h2>
    </section>
  );
};

export default MainSection;
