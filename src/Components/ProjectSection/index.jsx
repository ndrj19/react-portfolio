import React from "react";
import CardCarousel from "../CardCarousel";

const ProjectSection = () => {
  return (
    <>
      <div className="px-5 vh-100 bg-secondary text-white d-flex flex-column justify-content-around align-items-center">
        <h1>Projects</h1>
        <div
          id="carousel-small-screens"
          className="carousel slide d-flex d-md-none"
        >
          <CardCarousel
            groups={8}
            cardsPerGroup={1}
            displayString={"d-flex d-md-none"}
            carouselType={"carousel-small-screens"}
          />
        </div>
        <div
          id="carousel-medium-screens"
          className="carousel slide d-none d-md-flex d-xl-none"
        >
          <CardCarousel
            groups={4}
            cardsPerGroup={2}
            displayString={"d-none d-md-flex d-xl-none"}
            carouselType={"carousel-medium-screens"}
          />
        </div>
        <div
          id="carousel-large-screens"
          className="carousel slide d-none d-xl-flex"
        >
          <CardCarousel
            groups={2}
            cardsPerGroup={4}
            displayString={"d-none d-xl-flex"}
            carouselType={"carousel-large-screens"}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
