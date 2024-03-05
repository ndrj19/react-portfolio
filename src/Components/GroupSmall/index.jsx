import React from "react";
import CardSmall from "../CardSmall";
import projects from "../../projects";

const GroupSmall = ({ group }) => {
  return (
    <div className={`carousel-item ${group === 1 ? "active" : ""}`}>
      <div className="cards-wrapper w-100 d-flex justify-content-center px-3 gap-2">
        <CardSmall
          projId={projects[group * 2 - 2].id}
          img={projects[group * 2 - 2].img}
          title={projects[group * 2 - 2].title}
          description={projects[group * 2 - 2].description}
          github={projects[group * 2 - 2].github}
          liveProject={projects[group * 2 - 2].liveProject}
        />
        <CardSmall
          projId={projects[group * 2 - 1].id}
          img={projects[group * 2 - 1].img}
          title={projects[group * 2 - 1].title}
          description={projects[group * 2 - 1].description}
          github={projects[group * 2 - 1].github}
          liveProject={projects[group * 2 - 1].liveProject}
        />
      </div>
    </div>
  );
};

export default GroupSmall;
