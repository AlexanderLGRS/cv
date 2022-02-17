import React from "react";
import data from '../data.json';
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {

    const myProjects = data.projects
    console.log(myProjects);
    return (
        <React.Fragment>
            <div id="projects-section" className="container-fluid">
                <div className="row">
                    <p className="section-title">Projects</p>
                    {myProjects.map((project) => 
                        <ProjectCard projectName={project.projectName}
                            url={project.url} />
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}