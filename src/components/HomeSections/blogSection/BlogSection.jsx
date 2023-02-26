import React from "react";
import BlogsData from "../../../assets/json/Blogs.json";
import Img_leftArrow from "../../../assets/ImageUI/leftArrow.svg";

const BlogSection = () => {
  const data = BlogsData;
  return (
    <section id="#Blog">
      <button className="left-controller">
        <img src={Img_leftArrow} alt="Свайп влево" />
      </button>
      <nav className="carousel">
        {data.map((item) => {
          return (
            <figure>
              <img src={item["path"]} alt={item["alt"]} />
              <figcaption>{item["description"]}</figcaption>
            </figure>
          );
        })}
      </nav>
      <button className="right-controller">
        <img src={Img_leftArrow} alt="Свайп вправо" />
      </button>
    </section>
  );
};

export default BlogSection;
