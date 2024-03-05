import React from "react";
import ProjectCard from "../ProjectCard";

const CardGroup = ({ cardsPerGroup, displayString, group }) => {
  return (
    // <div className={`card-group ${displayString}`}>
    <div className="card-group">
      {Array(cardsPerGroup)
        .fill(null)
        .map((_, index) => {
          return <ProjectCard key={index} group={group} card={index + 1} />;
        })}
    </div>
  );
};

export default CardGroup;
