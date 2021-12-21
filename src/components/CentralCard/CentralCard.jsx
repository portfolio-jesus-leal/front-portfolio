import React from "react";
import "./CentralCard.scss";

const CentralCard = () => {
  return (
    <div className="centralcard">
      <div className="centralcard__text--big text-animated">
        ¡Bienvenido a mi portafolio!
      </div>

      <div className="centralcard__text--medium at-item">
        !Hola¡ Soy Jesús Leal, desarrollador web Full Stack
      </div>

      <div className="centralcard__text--regular at-item">
        Aquí os muestro algunas cosas que he hecho.
      </div>

      <div className="centralcard__rrss">
        <div className="centralcard__text--mini at-item">
          Me puedes encontrar en estas redes sociales:
        </div>

        <span className="centralcard__logo">
          <a
            href="https://www.linkedin.com/in/jesusleal/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="centralcard__logo-img"
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
            />
          </a>
        </span>

        <span className="centralcard__logo">
          <a
            href="https://www.instagram.com/lealp22/"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="centralcard__logo-img"
            />
          </a>
        </span>

        <span className="centralcard__logo">
          <a
            href="https://github.com/lealp22"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/github.svg"
              alt="Github"
              className="centralcard__logo-img"
            />
          </a>
        </span>

        <span className="centralcard__logo">
          <a
            href="https://www.codewars.com/users/Jesman22"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.codewars.com/assets/logos/logo-61192cf7c75904d495e7ad69695fbf0bffd965bc3e17ac60f6c6b475304db09d.svg"
              alt="Codewars"
              className="centralcard__logo-img"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default CentralCard;
