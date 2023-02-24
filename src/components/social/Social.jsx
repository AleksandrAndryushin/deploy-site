import React from "react";
import GithubLogo from "../../assets/github-logo.svg";
import "./style.css";

const Social = () => {
  return (
    <div className="social">
      <a href="https://github.com/AleksandrAndryushin/deploy-site">
        <img src={GithubLogo} alt="Github" />
      </a>
    </div>
  );
};

export default Social;
