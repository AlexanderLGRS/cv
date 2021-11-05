import React from "react";
import data from '../data.json';
import './styles/generalStyles.css'

export default function ExperienceCard(props) {
    const { company, startDate, endDate, jobTitle, jobDescription } = props;
    return (
        <React.Fragment>
            <div className="col-12 col-md-6">
                <div className="card text-white bg-dark mt-4">
                    <div className="card-body">
                        <ion-icon name="briefcase-outline"></ion-icon>
                        <h6 className="experience-card-subtitle mb-2">{company}</h6>
                        <h6 className="experience-card-subtitle mb-2">{startDate} - {endDate}</h6>
                        <h6 className="experience-card-subtitle mb-2">{jobTitle}</h6>
                        <h6 className="experience-card-subtitle mb-2">{jobDescription}</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}