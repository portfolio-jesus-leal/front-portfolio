import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Data } from "../../Data/Data";
import { Button, Paper } from "@mui/material";
import "./WebCard.scss";

const WebCard = ({ project }) => {
  console.log("WebCard");
  console.log("project->", project);

  const [activeModal, setActiveModal] = useState(false);
  const [details, setDetails] = useState({});

  const cardSelected = (e) => {
    console.log("e->", e);
    console.log("Data->", Data[Number(e) - 1]);

    setDetails(Data[Number(e) - 1]);

    setActiveModal(true);
  };

  const handleAccept = async (e) => {
    console.log("Accept->", e);
    setActiveModal(false);
  };

  return (
    <>
      <Paper elevation={3} className="webcard">
      
        {project.type === 1 && (
          <img
            className="webcard__img"
            id={project.id}
            src={project.img}
            alt={project.title}
            onClick={(e) => cardSelected(project.id)}
          />
        )}

        {project.type === 2 && (
          <div
            className="webcard__img"
            style={{ backgroundColor: project.color }}
          ></div>
        )}

        <Modal
          handleAccept={handleAccept}
          show={activeModal}
          children={
            <div className="modal">
              <img
                className="modal__img"
                src={project.img}
                alt={project.title}
              ></img>
              <div className="modal__title">{details.title}</div>
              <div
                className="modal__description"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></div>
              <div className="modal__link-group">
                {project.repository && (
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    <Button variant="contained" className="modal__link">
                      Repositorio
                    </Button>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Button variant="contained" className="modal__link">
                      Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          }
        />
      </Paper>
    </>
  );
};

export default WebCard;
