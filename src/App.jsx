import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GithubRepos from "./components/GithubRepos";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <GithubRepos />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
