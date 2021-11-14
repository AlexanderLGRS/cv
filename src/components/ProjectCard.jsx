import React from "react";
import data from '../data.json';

export default function ProjectCard(props) {
    const { projectName, url } = props;
    return (
        <React.Fragment>
            <div className="col-12 col-md-6">
                <div className="card text-white bg-dark mt-4">
                    <div className="card-body">
                    <ion-icon name="logo-react"></ion-icon>
                        <h6 className="project-card-subtitle mb-2">{projectName}</h6>
                        <h6 className="project-card-subtitle mb-2">{url}</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}