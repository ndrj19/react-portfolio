import React from "react";
import CardCarousel from "../CardCarousel";
import CardCarouselNew from "../CardCarouselNew";
import CarouselSmallScreens from "../CarouselSmallScreens";

const ProjectSectionNew = () => {
  return (
    <>
      <div
        id="projects-section"
        className="px-5 vh-100 text-white d-flex flex-column justify-content-around align-items-center"
      >
        <a
          href="#intro"
          className="btn carousel-control-prev-icon fa-rotate-90 nav-btn align-self-center"
        ></a>
        <h1 className="text-white fw-bolder text-center p-3 my-0 projects-header">
          Projects
        </h1>
        <div
          id="carousel-small-screens"
          className="carousel slide d-flex d-md-none"
        >
          <CarouselSmallScreens />
        </div>
        <div
          id="carousel-medium-screens"
          className="carousel slide d-none d-md-flex d-xl-none"
        >
          <CardCarouselNew />
        </div>
        <div
          id="carousel-large-screens"
          className="carousel slide d-none d-xl-flex"
        >
          <CardCarouselNew />
        </div>
        <a
          href="#about"
          className="btn carousel-control-next-icon fa-rotate-90 nav-btn align-self-center"
        ></a>
      </div>
    </>
  );
};

export default ProjectSectionNew;
