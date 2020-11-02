import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
function ProjectCard({ image, id }) {
  return (
    <div className="projectCard">
      <Link to={`/projects/${id}`}>
        <img className="projectCard__image" src={image} alt="" />
      </Link>
    </div>
  );
}

export default ProjectCard;
