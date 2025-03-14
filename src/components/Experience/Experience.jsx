import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <section id="experience" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-primary me-2"
                  />
                  Full Stack Development Intern
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Information Technology Institute (ITI)
                </h6>
                <p className="text-muted mb-2">
                  <small>11/2024 – 04/2025</small>
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    Worked on hands-on projects covering Python, Django,
                    databases, and front-end technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-danger me-2"
                  />
                  Emergency Call Center Operator
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Ministry of Interior – Najda Unit (Military Service), Egypt
                </h6>
                <p className="text-muted mb-2">
                  <small>12/2023 – 12/2024</small>
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    Handled emergency calls and provided immediate support in
                    both Arabic and English.
                  </li>
                  <li className="mb-2">
                    Managed sensitive calls related to security, medical, and
                    criminal incidents.
                  </li>
                  <li className="mb-2">
                    Operated under pressure and efficiently handled crisis
                    situations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-success me-2"
                  />
                  IT Intern
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Al Ezz Dekheila Steel Co. EZDK, Alexandria, Egypt
                </h6>
                <p className="text-muted mb-2">
                  <small>09/2022 – 10/2022</small>
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    Gained hands-on experience in IT infrastructure and software
                    development in a corporate setting.
                  </li>
                  <li className="mb-2">
                    Assisted in software development tasks and IT support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
