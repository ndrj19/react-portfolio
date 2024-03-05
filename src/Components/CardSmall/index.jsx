import React from "react";

const CardSmall = ({
  projId,
  img,
  title,
  description,
  github,
  liveProject,
}) => {
  return (
    <div className="card rounded-4">
      <div
        className="image-wrapper rounded-top-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${img})`,
        }}
      ></div>
      <div className="card-body border-top border-dark-subtle d-flex flex-column">
        <h4 className="card-title fw-bolder">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer rounded-bottom-4 border-0">
        <div className="d-flex column-gap-4">
          <a href={github} className="btn btn-dark badge rounded-pill p-2">
            Github
          </a>
          <a href={liveProject} className="btn btn-dark badge rounded-pill p-2">
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
