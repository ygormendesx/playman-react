import "../../App.css";
import React from "react";
import main from "../../images/main.gif";

const HomePage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="background">
        <img src={main} alt="Background" className="background-gif" />
      </div>
      <div className="header-main d-flex align-items-center">
        <div className="d-flex flex-column custom-link align-items-sm-center align-items-center align-items-md-start align-items-lg-start align-items-xl-start page-title">
          <a href="/" className="home-title-play-an">
            PLAYMAN
          </a>
          <a href="/" className="home-title-gen-an">
            Generative Artist
          </a>
        </div>
        <div className="list-menu d-flex justify-content-center">
          <ul className="list-menu d-flex align-items-center justify-content-center custom-link modern-menu">
            <li>
              <a href="./about">About</a>
            </li>
            <li>
              <a href="./projects">Projects</a>
            </li>
            <li>
              <a href="./contato">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
