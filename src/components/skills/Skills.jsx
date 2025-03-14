import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faNodeJs,
  faDocker,
  faLinux
} from "@fortawesome/free-brands-svg-icons";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
function Skills() {
  return (
    <section id="skills" className="py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>

        <div className="mb-5">
          <h3 className="mb-4">Technical Proficiency</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>React</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Python</span>
                  <span>88%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "88%" }}
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>HTML5</span>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>CSS3</span>
                  <span>88%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "88%" }}
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Django</span>
                  <span>85%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4">Technologies</h3>
          <div className="row text-center">
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faReact}
                size="3x"
                className="text-primary mb-2 icon"
              />
              <p>React</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faJsSquare}
                size="3x"
                className="text-warning mb-2 icon"
              />
              <p>JavaScript</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faHtml5}
                size="3x"
                className="text-danger mb-2 icon"
              />
              <p>HTML5</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="3x"
                className="text-info mb-2 icon"
              />
              <p>CSS3</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faGitAlt}
                size="3x"
                className="text-danger mb-2 icon"
              />
              <p>Git</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faBootstrap}
                size="3x"
                className="text-purple mb-2 icon"
              />
              <p>Bootstrap</p>
            </div>

            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faPython}
                size="3x"
                className="text-success mb-2 icon"
              />
              <p>Python</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faPython}
                size="3x"
                className="text-warning mb-2 icon"
              />
              <p>Django</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faServer}
                size="3x"
                className="text-secondary mb-2 icon"
              />
              <p>Flask</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faDatabase}
                size="3x"
                className="text-warning mb-2 icon"
              />
              <p>PostgreSQL</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faLinux}
                size="3x"
                className="text-dark mb-2 icon bg-white border rounded-3"
              />
              <p>Linux</p>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <FontAwesomeIcon
                icon={faDocker}
                size="3x"
                className="text-primary mb-2 icon"
              />
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
