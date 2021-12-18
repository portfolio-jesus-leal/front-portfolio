import React, { useEffect, useState } from "react";
import "./App.scss";
import WebCard from "./components/WebCard/WebCard";
import CentralCard from "./components/CentralCard/CentralCard";

const data = [
  {
    type: 1,
    img: "/images/maleteo.png",
    title: "Maleteo",
    link: "https://github.com/portfolio-jesus-leal/maleteo-project-back",
  },
  {
    type: 1,
    img: "/images/molebuster.png",
    title: "Mole Buster",
    link: "https://github.com/portfolio-jesus-leal/proyecto-javascript-molebuster-jesus-leal",
  },
  {
    type: 1,
    img: "/images/pokeapi.png",
    title: "Pokemon Api",
    link: "https://github.com/portfolio-jesus-leal/proyecto-javascript-pokeproject-jesus-leal",
  },
  {
    type: 1,
    img: "/images/portfolio.png",
    title: "Porfolio",
    link: "https://github.com/portfolio-jesus-leal/proyecto-html-css-portafolio-jesus-leal",
  },
  {
    type: 1,
    img: "/images/rickandmorty.png",
    title: "Rick And Morty Api",
    link: "https://github.com/portfolio-jesus-leal/proyecto-angular-rickandmorty-jesus-leal",
  },
  {
    type: 1,
    img: "/images/todolist.png",
    title: "ToDo List",
    link: "https://github.com/portfolio-jesus-leal/proyecto-javascript-todolist-jesus-leal",
  },
  {
    type: 2,
    color: "lightblue",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [listProjects, setListProjects] = useState(data);

  useEffect(() => {
    initApp();
  }, []);

  const initApp = () => {
    setIsLoading(false);
    setInterval(updateList, 5000);
    //updateList();

    console.log("listProjects[0]->", listProjects[0]);
    console.log("data->", data);
  };

  // Update list
  const updateList = () => {
    setListProjects(shuffledArray(data));
  };

  // Shuffled Array
  const shuffledArray = (array) => {
    console.log("shuffledArray");

    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[rand]] = [newArray[rand], newArray[i]];
    }
    return newArray;
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="App">
          <div className="App__project animate__fadeInLeft animate__delay-5s">
            <WebCard project={listProjects[0]} />
          </div>
          <div className="App__project animate__bounceInDown animate__delay-5s">
            <WebCard project={listProjects[1]} />
          </div>
          <div className="App__project animate__fadeInDownBig animate__delay-5s">
            <WebCard project={listProjects[2]} />
          </div>
          <div className="App__project animate__flipInX animate__delay-3s">
            <WebCard project={listProjects[3]} />
          </div>
          <div className="App__central">
            <CentralCard />
          </div>
          <div className="App__project animate__lightSpeedInRight animate__delay-5s">
            <WebCard project={listProjects[4]} />
          </div>
          <div className="App__project animate__jackInTheBox animate__delay-5s">
            <WebCard project={listProjects[5]} />
          </div>
          <div className="App__project animate__zoomIn animate__delay-2s">
            <WebCard project={listProjects[6]} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
