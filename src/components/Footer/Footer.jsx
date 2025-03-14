import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start"
        style={{
          backgroundColor: "#242424",
          position: "relative",
          bottom: 0,
          width: "100%"
        }}>
        <div className="container d-flex justify-content-center py-5">
          <a
            href="https://www.facebook.com/profile.php?id=100011741288220"
            className="btn btn-primary btn-lg btn-floating mx-2 text-primary"
            style={{ backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://github.com/Belalnajy"
            className="btn btn-primary btn-lg btn-floating mx-2 text-dark"
            style={{ backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/belalnajy"
            className="btn btn-primary btn-lg btn-floating mx-2 text-primary"
            style={{ backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="btn btn-primary btn-lg btn-floating mx-2 text-info"
            style={{ backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <div
          className="text-center text-white p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2025 Copyright:
          <a className="text-white" href="#">
            {" "}
            www.portfilo.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
