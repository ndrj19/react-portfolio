import React from "react";
import CardCarousel from "../CardCarousel";

const ProjectSection = () => {
  return (
    <>
      <div className="px-5 vh-100 bg-secondary text-white d-flex flex-column justify-content-around align-items-center">
        <h1>Projects</h1>
        <CardCarousel />
      </div>
    </>
  );
};

export default ProjectSection;
