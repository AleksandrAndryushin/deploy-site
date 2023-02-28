import React from "react";

const SocialLink = (link, path, alt, index) => {
  return (
    <a key={index} href={link}>
      <img src={path} alt={alt} />
    </a>
  );
};

export default SocialLink;
