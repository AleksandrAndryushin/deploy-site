import React from "react";
import SocialLink from "../../UI/socialLink/SocialLink";
import MainData from "../../../assets/json/Main.json";

const MainSection = () => {
  const woman = MainData["woman"];
  const man = MainData["man"];
  const history = MainData["history"];
  return (
    <section id="#Main">
      <figure>
        <img src={man["path"]} alt={man["alt"]}></img>
        <figcaption>{man["name"]}</figcaption>
        <div className="social-tab">
          {man["social"].map((item, index) => {
            return SocialLink(item["link"], item["path"], item["alt"], index);
          })}
        </div>
      </figure>
      <h1>&</h1>
      <figure>
        <img src={woman["path"]} alt={woman["alt"]}></img>
        <figcaption>{woman["name"]}</figcaption>
        <div className="social-tab">
          {woman["social"].map((item, index) => {
            return SocialLink(item["link"], item["path"], item["alt"], index);
          })}
        </div>
      </figure>
      <h2>{history}</h2>
    </section>
  );
};

export default MainSection;
