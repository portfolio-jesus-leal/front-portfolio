import React from "react";
import "./RrssCard.scss";

const RrssCard = () => {
  console.log("RrssCard");

  return (
    <div className="rrss-card">
      <span className="rrss-card__logo">
        <a
          href="https://www.linkedin.com/in/jesusleal/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rrss-card__logo-img"
            src="images/linkedin-svgrepo-com.svg"
            // src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
            alt="LinkedIn"
          />
        </a>
      </span>

      <span className="rrss-card__logo">
        <a
          href="https://github.com/lealp22"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/github.svg"
            alt="Github"
            className="rrss-card__logo-img"
          />
        </a>
      </span>

      <span className="rrss-card__logo">
        <a
          href="https://www.codewars.com/users/Jesman22"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.codewars.com/assets/logos/logo-61192cf7c75904d495e7ad69695fbf0bffd965bc3e17ac60f6c6b475304db09d.svg"
            alt="Codewars"
            className="rrss-card__logo-img"
          />
        </a>
      </span>
    </div>
  );
};

export default RrssCard;
