import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className=" text-center bg-image "
        style={{
          backgroundImage: `url('https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "70vh "
        }}>
        <div
          className="mask "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "70vh" }}>
          <div className="d-flex justify-content-start align-items-center ps-5  h-100">
            <div className="text-white  ">
              <h1
                className="mb-3"
                style={{ fontSize: "4rem", fontWeight: "bold" }}>
                Belal Nagy
              </h1>
              <h4 style={{ marginBottom: "5rem" }}>Full Stack Developer</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="https://linkedin.com/in/belalnajy"
                role="button">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
