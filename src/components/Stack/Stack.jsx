import React, { useRef } from "react";
import { Rerousel } from "rerousel";
import "./Stack.scss";

const techStack = [
  { title: "HTML5", image: "images/html-5-svgrepo-com.svg" },
  { title: "Css3", image: "images/css-3-svgrepo-com.svg" },
  { title: "Saa", image: "images/sass-svgrepo-com.svg" },
  { title: "JavaScript", image: "images/javascript-svgrepo-com.svg" },
  { title: "Angular", image: "images/angular-svgrepo-com.svg" },
  { title: "React", image: "images/react-svgrepo-com.svg" },
  { title: "Node.js", image: "images/nodejs-icon-svgrepo-com.svg" },
  { title: "Express", image: "images/express-svgrepo-com.svg" },
  { title: "MondoDB", image: "images/mongodb-svgrepo-com.svg" },
  { title: "Git", image: "images/git-svgrepo-com.svg" },
  { title: "Heroku", image: "images/heroku-svgrepo-com.svg" },
];

const Stack = () => {
  console.log("Stack");

  const customerLogo = useRef(null);

  return (
    <div className="stack">
        <Rerousel itemRef={customerLogo}>
          {techStack.map((item) => {
            return (
              <img
                className="stack__img"
                key={item.title}
                alt={item.title}
                title={item.title}
                src={item.image}
                ref={customerLogo}
              />
            );
          })}
        </Rerousel>
    </div>
  );
};

export default Stack;
