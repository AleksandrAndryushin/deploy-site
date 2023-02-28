import React from "react";
import SocialLink from "../socialLink/SocialLink";

const TableCard = (path, alt, fullName, socials, index) => {
  return (
    <figure key={index} className="card">
      <img src={path} alt={alt} />
      <figcaption>{fullName}</figcaption>
      <div className="social-tab">
        {SocialLink(socials["link"], socials["path"], socials["alt"])}
      </div>
    </figure>
  );
};

export default TableCard;
