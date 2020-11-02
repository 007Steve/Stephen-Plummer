import React from "react";
import "./Projects.css";
import PorjectCard from "./ProjectCard";
import ProjectData from "./projectData";

function Porjects() {
  return (
    <>
      <div className="projects" id="projects-section">
        <h2>PROJECTS</h2>

        <div className="projectsContainer">
          {ProjectData.map((data) => (
            <PorjectCard
              key={data.id}
              id={data.id}
              image={data.thumbnail}
              name={data.name}
              video=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Porjects;
