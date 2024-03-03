import React from "react";
import CardGroup from "../CardGroup";

const CardCarousel = ({
  groups,
  cardsPerGroup,
  displayString,
  carouselType,
}) => {
  return (
    <>
      <div className="carousel-inner">
        {Array(groups)
          .fill(null)
          .map((_, index) => {
            return (
              <div className={"carousel-item" + (index === 0 ? " active" : "")}>
                <CardGroup
                  key={index}
                  group={index + 1}
                  cardsPerGroup={cardsPerGroup}
                  displayString={displayString}
                />
              </div>
            );
          })}
      </div>
      <button
        className="carousel-control-prev nav-btn"
        type="button"
        data-bs-target={`#${carouselType}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next nav-btn"
        type="button"
        data-bs-target={`#${carouselType}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
};

export default CardCarousel;
