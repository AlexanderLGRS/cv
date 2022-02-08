import React from "react";
import data from '../data.json';
import ProjectCard from "./ProjectCard";

export default class ProjectsSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="projects-section" className="container-fluid">
                    <div className="row">
                        <p className="section-title">Projects</p>
                        <ProjectCard projectName={data.projects[0].projectName}
                            url={data.projects[0].url} />
                        <ProjectCard projectName={data.projects[1].projectName}
                            url={data.projects[1].url} />
                        <ProjectCard projectName={data.projects[2].projectName}
                            url={data.projects[2].url} />
                        <ProjectCard projectName={data.projects[3].projectName}
                            url={data.projects[3].url} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}