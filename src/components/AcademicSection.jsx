import React from "react";
import data from '../data.json';
import AcademicCard from "./AcademicCard";

export default function AcademicSection() {
    const myAcademics = data.academic
    return (
        <React.Fragment>
            <div id="academic-section" className="container-fluid">
                <div className="row">
                    <p className="section-title">Academic</p>
                    {myAcademics.map((academic)=>
                    <AcademicCard name={academic.name}
                        startDate={academic.startDate}
                        endDate={academic.endDate}
                        institution={academic.institution} />
                    )}
                </div>
            </div>
        </React.Fragment >
    )
}
