import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        class="d-flex flex-column bg-primary vh-100 justify-content-center align-items-center"
      >
        <a
          href="#projects-section"
          class="carousel-control-prev-icon fa-rotate-90 nav-btn"
        ></a>
        <h1 class="text-white fw-bolder about-header text-center py-3">
          About
        </h1>
        <div class="d-flex flex-wrap justify-content-center align-items-center mx-4">
          <p class="text-white my-0 mx-3 about-text">
            I am a full stack software developer. I graduated from iO Academy in
            December 2023. My journey into the world of technology commenced as
            a Product Analyst, where I honed skills in SQL and Git. These were
            my favorite things and it quickly fueled my aspiration to transition
            into a developer role.Skills/languages: Javascript, PHP, React, SQL,
            HTML, CSS, Bootstrap
          </p>
          <img
            src="assets/Andrej_02.jpg"
            alt="Image of Andrej"
            class="mepic rounded-4 mx-3 my-5"
          />
        </div>
        <a
          href="#contact"
          class="carousel-control-next-icon fa-rotate-90 nav-btn"
        ></a>
      </div>
    </>
  );
};

export default About;
