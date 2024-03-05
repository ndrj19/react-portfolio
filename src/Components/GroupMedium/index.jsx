import React from "react";
import CardSmall from "../CardSmall";
import projects from "../../projects";

const GroupMedium = ({ group }) => {
  return (
    <div className={`carousel-item ${group === 1 ? "active" : ""}`}>
      <div className="cards-wrapper w-100 d-flex justify-content-center px-3 gap-2">
        <CardSmall
          projId={projects[group * 3 - 3].id}
          img={projects[group * 3 - 3].img}
          title={projects[group * 3 - 3].title}
          description={projects[group * 3 - 3].description}
          github={projects[group * 3 - 3].github}
          liveProject={projects[group * 3 - 3].liveProject}
        />
        <CardSmall
          projId={projects[group * 3 - 2].id}
          img={projects[group * 3 - 2].img}
          title={projects[group * 3 - 2].title}
          description={projects[group * 3 - 2].description}
          github={projects[group * 3 - 2].github}
          liveProject={projects[group * 3 - 2].liveProject}
        />
        <CardSmall
          projId={projects[group * 3 - 1].id}
          img={projects[group * 3 - 1].img}
          title={projects[group * 3 - 1].title}
          description={projects[group * 3 - 1].description}
          github={projects[group * 3 - 1].github}
          liveProject={projects[group * 3 - 1].liveProject}
        />
      </div>
    </div>
  );
};

export default GroupMedium;
