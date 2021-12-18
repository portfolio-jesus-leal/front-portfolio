import React from "react";
import "./WebCard.scss";

const WebCard = ({project}) => {

    console.log('WebCard');
    console.log('project->', project);

    return (
        <div className="webcard">
            {project.type === 1 &&
                <img className="webcard__img" src={project.img} alt={project.title} />
            }
            {project.type === 2 &&
                <div className="webcard__img" style={{backgroundColor: project.color}}>AQUI</div>
            }
        </div>
    )

}

export default WebCard;