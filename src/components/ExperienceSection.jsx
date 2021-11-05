import React from "react";
import data from '../data.json';
import ExperienceCard from "./ExperienceCard";

export default class ExperieceSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="experience-section" className="container-fluid">
                    <div className="row">
                    <p className="section-title">Experience</p>
                        <ExperienceCard company={data.experience[0].company}
                            startDate={data.experience[0].startDate}
                            endDate={data.experience[0].endDate}
                            jobTitle={data.experience[0].jobTitle}
                            jobDescription={data.experience[0].jobDescription} />
                        <ExperienceCard company={data.experience[1].company}
                            startDate={data.experience[1].startDate}
                            endDate={data.experience[1].endDate}
                            jobTitle={data.experience[1].jobTitle}
                            jobDescription={data.experience[1].jobDescription} />
                        <ExperienceCard company={data.experience[2].company}
                            startDate={data.experience[2].startDate}
                            endDate={data.experience[2].endDate}
                            jobTitle={data.experience[2].jobTitle}
                            jobDescription={data.experience[2].jobDescription} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}