import React from "react";
import CardSmall from "../CardSmall";
import projects from "../../projects";

const GroupLarge = ({ group }) => {
  return (
    <div className={`carousel-item ${group === 1 ? "active" : ""}`}>
      <div className="cards-wrapper w-100 d-flex justify-content-center px-3 gap-2">
        <CardSmall
          projId={projects[group * 4 - 4].id}
          img={projects[group * 4 - 4].img}
          title={projects[group * 4 - 4].title}
          description={projects[group * 4 - 4].description}
          github={projects[group * 4 - 4].github}
          liveProject={projects[group * 4 - 4].liveProject}
        />
        <CardSmall
          projId={projects[group * 4 - 3].id}
          img={projects[group * 4 - 3].img}
          title={projects[group * 4 - 3].title}
          description={projects[group * 4 - 3].description}
          github={projects[group * 4 - 3].github}
          liveProject={projects[group * 4 - 3].liveProject}
        />
        <CardSmall
          projId={projects[group * 4 - 2].id}
          img={projects[group * 4 - 2].img}
          title={projects[group * 4 - 2].title}
          description={projects[group * 4 - 2].description}
          github={projects[group * 4 - 2].github}
          liveProject={projects[group * 4 - 2].liveProject}
        />
        <CardSmall
          projId={projects[group * 4 - 1].id}
          img={projects[group * 4 - 1].img}
          title={projects[group * 4 - 1].title}
          description={projects[group * 4 - 1].description}
          github={projects[group * 4 - 1].github}
          liveProject={projects[group * 4 - 1].liveProject}
        />
      </div>
    </div>
  );
};

export default GroupLarge;
