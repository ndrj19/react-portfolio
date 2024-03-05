import React from "react";
import GroupMedium from "../GroupMedium";

const CarouselMedium = () => {
  return (
    <div
      id="carousel-medium-screens"
      className="py-3 px-4 carousel slide d-none d-lg-block d-xl-none"
      data-bs-touch="true"
    >
      {Array(3)
        .fill(null)
        .map((_, i) => {
          return <GroupMedium key={i} group={i + 1} />;
        })}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-medium-screens"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-medium-screens"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselMedium;
