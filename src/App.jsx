import { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Card } from "react-bootstrap";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";

export function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Footer />


    </>
  );
}

export default App;
