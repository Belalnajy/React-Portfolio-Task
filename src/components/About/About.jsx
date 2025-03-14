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
          <h3 className="mb-3">I'm John Doe</h3>
          <h5 className="text-muted mb-4">Frontend Developer & Designer</h5>

          <p className="lead">
            I'm a passionate developer with over 5 years of experience in
            creating beautiful and functional web applications. I specialize in
            crafting user-friendly interfaces and bringing designs to life.
          </p>
        </div>
        <a
          href="../../../public/Belal-Nagy-CV.pdf"
          download="Belal-Nagy-CV.pdf"
          className="btn btn-primary mt-4">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
