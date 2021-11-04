import React from "react";
import ProgressBar from "./ProgressBar";
import data from '../data.json';
import './styles/generalStyles.css'

export default class SkillsSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <p className="section-title">Skills</p>
                        <div className="col-12 p-0">
                            <div className="skills-card card text-white bg-dark ">
                                <div className="card-body">
                                    <ProgressBar skill={data.skills[0].name} percentage={data.skills[0].percentage} color={data.skills[0].color} />
                                    <ProgressBar skill={data.skills[1].name} percentage={data.skills[1].percentage} color={data.skills[1].color} />
                                    <ProgressBar skill={data.skills[2].name} percentage={data.skills[2].percentage} color={data.skills[2].color} />
                                    <ProgressBar skill={data.skills[3].name} percentage={data.skills[3].percentage} color={data.skills[3].color} />
                                    <ProgressBar skill={data.skills[4].name} percentage={data.skills[4].percentage} color={data.skills[4].color} />
                                    <ProgressBar skill={data.skills[5].name} percentage={data.skills[5].percentage} color={data.skills[5].color} />
                                    <ProgressBar skill={data.skills[6].name} percentage={data.skills[6].percentage} color={data.skills[6].color} />
                                    <ProgressBar skill={data.skills[7].name} percentage={data.skills[7].percentage} color={data.skills[7].color} />
                                    <ProgressBar skill={data.skills[8].name} percentage={data.skills[8].percentage} color={data.skills[8].color} />
                                    <ProgressBar skill={data.skills[9].name} percentage={data.skills[9].percentage} color={data.skills[9].color} />
                                    <ProgressBar skill={data.skills[10].name} percentage={data.skills[10].percentage} color={data.skills[10].color} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}