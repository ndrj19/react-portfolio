import React from "react";
import ProjectCard from "../ProjectCard";

const CardGroup = ({ cardsPerGroup, displayString }) => {
  return (
    <div className={`card-group ${displayString}`}>
      {Array(cardsPerGroup)
        .fill(null)
        .map((_, index) => {
          return <ProjectCard key={index} />;
        })}
    </div>
  );
};

export default CardGroup;
