import React from "react";
import GroupLarge from "../GroupLarge";

const CarouselLarge = () => {
  return (
    <div
      id="carousel-large-screens"
      className="py-3 px-4 carousel slide d-none d-xl-block"
      data-bs-touch="true"
    >
      {Array(2)
        .fill(null)
        .map((_, i) => {
          return <GroupLarge key={i} group={i + 1} />;
        })}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-large-screens"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-large-screens"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselLarge;
