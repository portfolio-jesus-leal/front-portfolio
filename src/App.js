import React, { useEffect, useState } from "react";
import "./App.scss";
import WebCard from "./components/WebCard/WebCard";
import CentralCard from "./components/CentralCard/CentralCard";
import Spinner from "./components/Spinner/Spinner";
import { Data } from "./Data/Data";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [listProjects, setListProjects] = useState(Data);

  useEffect(() => {
    initApp();
  }, []);

  const initApp = () => {
    setIsLoading(false);
    setInterval(updateList, 5000);
    //updateList();

    console.log("listProjects[0]->", listProjects[0]);
    console.log("Data->", Data);
  };

  //
  // Update list
  //
  const updateList = () => {
    setListProjects(shuffledArray(Data));
  };

  //
  // Shuffled Array
  //
  const shuffledArray = (array) => {
    console.log("shuffledArray ->", array);

    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[rand]] = [newArray[rand], newArray[i]];
    }
    return newArray;
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="App">

          <div className="App__left">
            <div className="App__project animate__fadeInLeft animate__slow">
              <WebCard project={listProjects[0]} />
            </div>
            <div className="App__project animate__fadeInLeft animate__delay-3s">
              <WebCard project={listProjects[1]} />
            </div>
            <div className="App__project animate__fadeInLeft animate__delay-4s">
              <WebCard project={listProjects[2]} />
            </div>
            <div className="App__project animate__fadeInLeft animate__delay-5s">
              <WebCard project={listProjects[3]} />
            </div>
          </div>

          <div className="App__central">
            <CentralCard />
          </div>

          <div className="App__right">
            <div className="App__project animate__fadeInRight">
              <WebCard project={listProjects[4]} />
            </div>
            <div className="App__project animate__fadeInRight">
              <WebCard project={listProjects[5]} />
            </div>
            <div className="App__project animate__fadeInRight">
              <WebCard project={listProjects[6]} />
            </div>
            <div className="App__project animate__fadeInRight">
              <WebCard project={listProjects[7]} />
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default App;
