import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./WebCard.scss";

const WebCard = ({ project }) => {
  console.log("WebCard");
  console.log("project->", project);

  const [activeModal, setActiveModal] = useState(false);

  const cardSelected = (e) => {
    console.log("e->", e);
    setActiveModal(true);
  };

  const handleAccept = async (e) => {
    console.log("Accept->", e);
    setActiveModal(false);
  };

  const handleCancel = (e) => {
    console.log("Cancel->", e);
    setActiveModal(false);
  };

  return (
    <div className="webcard">
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
        handleCancel={handleCancel}
        show={activeModal}
        children={
          <div className="modal__message">
            <img src="" alt=""></img>
            <div>title here</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div>Repositorio:</div>
            <a href="http://" target="_blank" rel="noreferrer">Link1</a>
            <div>Demo:</div>
            <a href="http://" target="_blank" rel="noreferrer">Link2</a>
          </div>
        }
      />
    </div>
  );
};

export default WebCard;
