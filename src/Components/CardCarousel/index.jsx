import React from "react";
import CardGroup from "../CardGroup";
import projects from "../../projects";

const CardCarousel = () => {
  // console.log(projects);
  return (
    <>
      <div
        id="carousel-small-screens"
        className="carousel slide d-flex d-md-none"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-small-screens"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-small-screens"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carousel-medium-screens"
        className="carousel slide d-none d-md-flex d-xl-none"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-medium-screens"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-medium-screens"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carousel-large-screens"
        className="carousel slide d-none d-xl-flex"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CardGroup projects4={projects.slice(0, 4)} />
          </div>
          <div className="carousel-item">
            <CardGroup />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-large-screens"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-large-screens"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CardCarousel;
