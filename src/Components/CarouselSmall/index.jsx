import React from "react";
import GroupSmall from "../GroupSmall";

const CarouselSmall = () => {
  return (
    <div
      id="carousel-small-screens"
      className="py-3 px-4 carousel slide d-none d-sm-block d-lg-none"
      data-bs-touch="true"
    >
      {Array(4)
        .fill(null)
        .map((_, i) => {
          return <GroupSmall key={i} group={i + 1} />;
        })}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-small-screens"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-small-screens"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSmall;
