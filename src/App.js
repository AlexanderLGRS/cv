import React from "react";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import AcademicSection from "./components/AcademicSection";
import ExperieceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ReturnButton from "./components/ReturnButton";


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SkillsSection />
        <AcademicSection />
        <ExperieceSection />
        <ProjectsSection/>
        <ReturnButton />
      </React.Fragment>
    )
  }
}