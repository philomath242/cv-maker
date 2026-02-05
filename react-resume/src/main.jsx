import React from "react";
import ReactDOM from "react-dom/client";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import LeadershipExperience from "./LeadershipExperience";
import Skills from "./Skills";
import Header from "./Header";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Education />
    <WorkExperience />
    <Projects />
    <LeadershipExperience />
    <Skills />
  </React.StrictMode>
);
