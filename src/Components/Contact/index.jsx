import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        class=" d-flex flex-column bg-secondary vh-100 justify-content-center align-items-center"
      >
        <a
          href="#about"
          class="carousel-control-prev-icon fa-rotate-90 nav-btn mb-5"
        ></a>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-white fw-bolder text-center py-3 px-5 contact-text my-0">
            Contact
          </h1>
          <div class="d-flex justify-content-center align-items-center icon-container my-3">
            <a href="https://github.com/ndrj19">
              <i class="contact-icon fa-brands fa-github fa-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/andrejhagenmueller/">
              <i class="contact-icon fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="mailto:andrej.hagenmueller@gmail.com?subject=Let's&nbsp;work&nbsp;together!">
              <i class="contact-icon fa-regular fa-envelope fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
