import React from "react";
import data from '../data.json';
import './styles/generalStyles.css'

export default function ExperienceCard(props) {
    const { company, startDate, endDate, jobTitle, jobDescription } = props;
    return (
        <React.Fragment>
            <div className="col-12 col-md-6">
                <div className="card text-white bg-dark">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2">{company}</h6>
                        <h6 className="card-subtitle mb-2">{startDate} - {endDate}</h6>
                        <h6 className="card-subtitle mb-2">{jobTitle}</h6>
                        <h6 className="card-subtitle mb-2">{jobDescription}</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}