import React from "react";

const Intro = () => {
  return (
    <>
      <div
        id="intro"
        className="intro px-5 vh-100 bg-primary text-white d-flex flex-column justify-content-around align-items-center"
      >
        <div className="mt-5 pt-5 mx-5 px-5">
          <h1 className="fs-1 fw-bolder">
            Hi,<br></br> I am Andrej
          </h1>
          <p className="fs-5 justify-content-center">
            I'm a passionate Full Stack Developer crafting (web) applications
            using a variety of technologies, including JavaScript, PHP, SQL, and
            MongoDB. I have hands-on experience with frameworks like React,
            Express and Slim.
          </p>
          <div className="d-flex gap-2 mt-5 justify-content-center">
            <a href="#projects-section" className="p-1 fs-5 intro-link">
              Projects
            </a>
            <a href="#about" className="p-1 fs-5 intro-link">
              About
            </a>
            <a href="#contact" className="p-1 fs-5 intro-link">
              Contact
            </a>
          </div>
        </div>
        <a
          href="#projects-section"
          className="btn carousel-control-next-icon fa-rotate-90 nav-btn"
        ></a>
      </div>
    </>
  );
};

export default Intro;
