import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="d-flex flex-column vh-100 justify-content-center align-items-center"
      >
        <a
          href="#projects-section"
          className="btn carousel-control-prev-icon fa-rotate-90 nav-btn"
        ></a>
        <h1 className="text-white fw-bolder about-header text-center py-3">
          About
        </h1>
        <div className="d-flex flex-wrap justify-content-center align-items-center mx-4">
          <p className="text-white my-0 mx-3 about-text">
            I am a full stack software developer. I graduated from iO Academy in
            December 2023. My journey into the world of technology commenced as
            a Product Analyst, where I honed skills in SQL and Git. These were
            my favorite things and it quickly fueled my aspiration to transition
            into a developer role.<br></br> Skills/languages: Javascript, PHP,
            React, SQL, HTML, CSS, Bootstrap
          </p>
          <img
            src="src/assets/andrej.jpg"
            alt="Image of Andrej"
            className="mepic rounded-4 mx-3 my-5"
          />
        </div>
        <a
          href="#contact"
          className="btn carousel-control-next-icon fa-rotate-90 nav-btn"
        ></a>
      </div>
    </>
  );
};

export default About;
