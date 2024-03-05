import React from "react";

const CarouselMedium = () => {
  return (
    <div
      id="carousel-medium-screens"
      className="py-3 px-4 carousel slide d-none d-md-block d-xl-none"
      data-bs-touch="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cards-wrapper w-100 d-flex justify-content-center px-3 gap-2">
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Furniture Store</h4>
                <p className="card-text">
                  An object-orientated PHP project with a provided React
                  frontend, that fetches and displays product information from a
                  MySql database.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/iO-Academy/23-aug-furniture-store-API"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://furniture-store.dev.io-academy.uk/"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Academy portal</h4>
                <p className="card-text">
                  A Slim PHP app which allows to manage applicants, courses,
                  events, etc. at iO Academy. I worked on a new calendar feature
                  using a 3rd party plugin.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/iO-Academy/AcademyPortal"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://portal.dev.io-academy.uk/"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Invoicing App</h4>
                <p className="card-text">
                  A React + Bootstrap project with a provided backend that
                  allows the user to manage invoices.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/iO-Academy/23-aug-invoicing"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://23-aug-invoicing.dev.io-academy.uk/"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="cards-wrapper d-flex justify-content-center gap-3">
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Chess Clock</h4>
                <p className="card-text">
                  A simple chess clock built with React. I use it when I'm
                  playing with my dad and he forgot to bring a chess clock.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/ndrj19/ifyouforgotyourchessclock.github.io"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://ifyouforgotyourchessclock.2023-andrejh.dev.io-academy.uk/"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Brainworms' Boneyard</h4>
                <p className="card-text">
                  Brainworms' Boneyard is a spooky Pairs game written in
                  JavaScript, HTML and CSS coming in a spooky Halloween edition.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/iO-Academy/23-aug-pairs"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://dev.io-academy.uk/projects/2023-aug/23-aug-pairs/game.html"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">
                  Pathogens Collection App
                </h4>
                <p className="card-text">
                  A PHP app that fetches and displays records from an SQL
                  database. Don't ask why I collect pathogens!
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/ndrj19/pathogens-collection"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://2023-andrejh.dev.io-academy.uk/pathogens-collection/"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="cards-wrapper d-flex justify-content-center gap-3">
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Tip Splitter</h4>
                <p className="card-text">
                  A React app that allows you to quickly calculate the tip
                  amount based on your bill.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a
                    href="https://github.com/ndrj19/tip-splitter"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://tip-splitter.2023-andrejh.dev.io-academy.uk/"
                    className="btn btn-dark badge rounded-pill p-2"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card rounded-4">
              <div
                className="image-wrapper rounded-top-4"
                style={{ backgroundImage: "url(src/assets/furniture.png)" }}
              ></div>
              <div className="card-body border-top border-dark-subtle d-flex flex-column">
                <h4 className="card-title fw-bolder">Next Proj</h4>
                <p className="card-text">
                  Description of the next great project.
                </p>
              </div>
              <div className="card-footer rounded-bottom-4 border-0">
                <div className="d-flex column-gap-4">
                  <a href="" className="btn btn-dark badge rounded-pill p-2">
                    Github
                  </a>
                  <a href="" className="btn btn-dark badge rounded-pill p-2">
                    Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-medium-screens"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-medium-screens"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselMedium;
