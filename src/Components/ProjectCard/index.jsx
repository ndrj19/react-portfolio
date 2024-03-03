import React from "react";
import projects from "../../projects";

const ProjectCard = ({ group, card }) => {
  const { img, title, description, github, liveLink } =
    projects[group * card - 1];
  return (
    <>
      <div className="card rounded-4">
        <img src={img} className="card-img-top rounded-top-4" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="card-footer rounded-bottom-4 border-0">
            <div className="d-flex column-gap-4">
              <a href={github} className="btn btn-dark badge rounded-pill p-2">
                Github
              </a>
              <a
                href={liveLink}
                className="btn btn-dark badge rounded-pill p-2"
              >
                Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
