import React from "react";
import "./CentralCard.scss";
import Stack from "../Stack/Stack";
import RrssCard from "../RrssCard/RrssCard";
import { FormattedMessage } from "react-intl";

const CentralCard = () => {
  return (
    <div className="centralcard">
      <div className="centralcard__text--big text-animated">
        <FormattedMessage
          id="app.header"
          defaultMessage="¡Bienvenido a mi portafolio!"
        />
      </div>

      <div className="centralcard__text--medium at-item">
        <FormattedMessage
          id="app.content"
          defaultMessage="!Hola¡ Soy Jesús Leal, desarrollador web Full Stack"
        />
      </div>

      <div className="centralcard__text--regular at-item">
        <FormattedMessage
          id="app.description"
          defaultMessage="Aquí os muestro algunas cosas que he hecho hasta ahora"
        />
      </div>

      <div className="centralcard__text--mini-title">
        <FormattedMessage
          id="app.technology"
          defaultMessage="Tecnología utilizada >>_"
        />
        <Stack />
      </div>


      <div className="centralcard__rrss">
        <div className="centralcard__text--mini at-item">
          <FormattedMessage
            id="app.rrss"
            defaultMessage="Me puedes encontrar en estas redes sociales:"
          />
        </div>
        <RrssCard />
      </div>
    </div>
  );
};

export default CentralCard;
