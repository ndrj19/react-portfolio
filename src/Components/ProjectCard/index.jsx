import React from "react";

const ProjectCard = (
  projData = props.projData
) => {
  console.log(title);
  return (
    <>
      <div className="card rounded-4">
        <img
          src="src/assets/background.jpg"
          className="card-img-top rounded-top-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Ghahägi is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <div className="card-footer rounded-bottom-4 border-0">
            <div className="d-flex column-gap-4">
              <a href="" className="btn btn-dark badge rounded-pill p-2">
                Github
              </a>
              <a href="" className="btn btn-dark badge rounded-pill p-2">
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
