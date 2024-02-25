import React from "react";

const Intro = () => {
  return (
    <>
      <div
        id="intro"
        class="intro px-5 vh-100 bg-primary text-white d-flex flex-column justify-content-around align-items-center"
      >
        <div class="mt-5 pt-5">
          <h1 class="fs-1 fw-bolder">
            Hi,<br></br> I am Andrej
          </h1>
          <p class="fs-4">I'm a Full Stack Developer in Bath, UK.</p>
          <div class="d-flex gap-2 justify-content-end">
            <a
              href="#projects-section"
              class="border p-1 fs-5 text-white intro-link"
            >
              Projects
            </a>
            <a href="#about" class="border p-1 fs-5 text-white intro-link">
              About
            </a>
            <a href="#contact" class="border p-1 fs-5 text-white intro-link">
              Contact
            </a>
          </div>
        </div>
        <a
          href="#projects-section"
          class="carousel-control-next-icon fa-rotate-90 nav-btn"
        ></a>
      </div>
    </>
  );
};

export default Intro;
