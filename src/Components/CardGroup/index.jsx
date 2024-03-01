import React from "react";
import ProjectCard from "../ProjectCard";

const CardGroup = () => {
  return (
    <>
      <div className="card-group d-flex d-md-none">
        <ProjectCard />
      </div>
      <div className="card-group d-none d-md-flex d-xl-none">
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="card-group d-none d-xl-flex">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default CardGroup;
