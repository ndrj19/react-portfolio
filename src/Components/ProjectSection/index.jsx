import React from "react";
import CarouselXSmall from "../CarouselXSmall";
import CarouselSmall from "../CarouselSmall";
import CarouselMedium from "../CarouselMedium";

const ProjectSection = () => {
  return (
    <div
      id="projects-section"
      className=" vh-100 d-flex flex-column justify-content-center"
    >
      <a
        href="#intro"
        className="btn carousel-control-prev-icon fa-lg fa-rotate-90 nav-btn align-self-center"
      ></a>
      <h1 className="text-white fw-bolder text-center p-3 my-0 projects-header">
        Projects
      </h1>
      <CarouselXSmall />
      <CarouselSmall />
      <CarouselMedium />
      <a
        href="#about"
        className="btn carousel-control-next-icon fa-rotate-90 nav-btn align-self-center"
      ></a>
    </div>
  );
};

export default ProjectSection;
