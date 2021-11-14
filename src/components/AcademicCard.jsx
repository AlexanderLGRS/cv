import React from "react";

export default function AcademicCard(props) {
    const { name, startDate, endDate, institution } = props;
    return (
        <React.Fragment>
            <div className="col-12 col-md-6">
                <div className="card text-white bg-dark mt-4">
                    <div className="card-body">
                    <ion-icon name="school"></ion-icon>
                        <h6 className="academic-card-subtitle mb-2">{name}</h6>
                        <h6 className="academic-card-subtitle mb-2">{startDate} - {endDate}</h6>
                        <h6 className="academic-card-subtitle mb-2">{institution}</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}