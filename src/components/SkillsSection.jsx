import React from "react";
import ProgressBar from "./ProgressBar";
import data from '../data.json';
import './styles/generalStyles.css'

export default function SkillsSection() {
    const mySkills = data.skills
    return (
        <React.Fragment>
            <div id="skills-section" className="container-fluid">
                <div className="row">
                    <p className="section-title">Skills</p>
                    <div className="col-12 p-0">
                        <div className="skills-card card text-white bg-dark ">
                            <div className="card-body">
                                {mySkills.map((skill) =>
                                    <ProgressBar skill={skill.name} percentage={skill.percentage} key={Math.random()} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
