import React from "react";
import data from '../data.json';
import './styles/generalStyles.css'

export default function AcademicCard(props) {
    const { name, startDate, endDate, institution } = props;
    return (
        <React.Fragment>
            <div className="col-12 col-md-6">
                <div className="card text-white bg-dark">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2">{name}</h6>
                        <h6 className="card-subtitle mb-2">{startDate} - {endDate}</h6>
                        <h6 className="card-subtitle mb-2">{institution}</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}