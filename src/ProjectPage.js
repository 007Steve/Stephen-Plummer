import React from "react";
import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import ProjectData from "./projectData";
import Nav from "./Nav";

function ProjectPage() {
  const { id } = useParams();
  const projectInfo = ProjectData.find((data) => data.id === id);

  return (
    <>
      <Nav />
      <div
        className="projectPage"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${projectInfo.backgroundPic}")`,
          backgroundPosition: "center center",
          color: `${projectInfo.color}`,
        }}
      ></div>

      <div className="info">
        <div className="projectPage__headerInfo">
          <h3 className="projectPage__h3">{projectInfo.name}</h3>
          <p
            className="projectPage__p"
            style={{ color: `${projectInfo.color}` }}
          >
            {projectInfo.tools}
          </p>
        </div>

        <div className="buttons-container">
          <a href={projectInfo.website} className="btn-grad">
            Live
          </a>
          <a href={projectInfo.github} className="btn-grad btn-code">
            Code
          </a>
        </div>
      </div>
      <div className="projectPage__detailsContainer">
        <div className="projectPage__details">
          <h4  style={{ color: `${projectInfo.color}` }}>Overview</h4>
          <p>{projectInfo.description}</p>
        </div>

        <div className="projectPage__video">
          <iframe
            autoplay
            title={projectInfo.name}
            width="1309"
            height="652"
            src={`https://www.youtube.com/embed/${projectInfo.video}`}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
