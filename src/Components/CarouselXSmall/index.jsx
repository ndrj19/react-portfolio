import React from "react";
import CardXSmall from "../CardXSmall";
import projects from "../../projects";

const CarouselXSmall = () => {
  return (
    <div
      id="carousel-xsmall-screens"
      className="py-3 px-4 carousel slide d-block d-sm-none"
      data-bs-touch="true"
    >
      <div className="carousel-inner">
        {projects.slice(0, 7).map((proj, i) => {
          return (
            <CardXSmall
              key={i}
              projId={proj.id}
              img={proj.img}
              title={proj.title}
              description={proj.description}
              github={proj.github}
              liveProject={proj.liveProject}
            />
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-xsmall-screens"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-xsmall-screens"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselXSmall;
