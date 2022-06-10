import React from "react";
import data from '../data.json';
import ExperienceCard from "./ExperienceCard";

export default function ExperieceSection() {
    const myExperiences = data.experience
    return(
        <React.Fragment>
            <div id="experience-section" className="container-fluid">
                <div className="row">
                    <p className="section-title">Experience</p>
                    {myExperiences.map((experience)=>
                    <ExperienceCard company={experience.company}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        jobTitle={experience.jobTitle}
                        jobDescription={experience.jobDescription} key={Math.random()}/>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}