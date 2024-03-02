import React from "react";
import ProjectCard from "../ProjectCard";

const CardGroup = (projects4 = props.projects4) => {
  console.log(projects4);
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
        {/* {projects4.map((_, i) => {
          return <ProjectCard key={i} projData={projects4[0]} />;
        })} */}
        <ProjectCard projData={projects4[0]} />
      </div>
    </>
  );
};

export default CardGroup;
