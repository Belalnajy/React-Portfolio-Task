import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div
        className=" p-5 mx-auto shadow  "
        style={{ backgroundColor: "white" }}>
        <h2 className="text-center mb-5 fw-bold about-text ">About Me</h2>

        <div className="col-lg-8 col-md-7">
          <h3 className="mb-3">I'm Belal Nagy</h3>
          <h5 className="text-muted mb-4">Software Engineer</h5>

          <p className="lead">
            Motivated and dedicated Software Engineer with expertise in Python
            and Django. Passionate about developing scalable web applications
            and enhancing user experiences. Eager to apply my knowledge in a
            dynamic and collaborative work environment. Committed to continuous
            learning and professional growth in the tech industry.
          </p>
        </div>
        <a
          href="../../../public/Belal-Nagy-CV.pdf"
          download="Belal-Nagy-CV.pdf"
          className="btn btn-primary mt-4 p-3">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
