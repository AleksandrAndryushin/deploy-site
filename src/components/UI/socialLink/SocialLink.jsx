import React from "react";

const SocialLink = (link, path, alt) => {
  return (
    <a href={link}>
      <img src={path} alt={alt} />
    </a>
  );
};

export default SocialLink;
