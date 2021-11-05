import React from "react";
import data from '../data.json';
import AcademicCard from "./AcademicCard";

export default class AcademicSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="academic-section" className="container-fluid">
                    <div className="row">
                    <p className="section-title">Academic</p>
                        <AcademicCard name={data.academic[0].name}
                            startDate={data.academic[0].startDate}
                            endDate={data.academic[0].endDate}
                            institution={data.academic[0].institution} />
                        <AcademicCard name={data.academic[1].name}
                            startDate={data.academic[1].startDate}
                            endDate={data.academic[1].endDate}
                            institution={data.academic[1].institution} />
                        <AcademicCard name={data.academic[2].name}
                            startDate={data.academic[2].startDate}
                            endDate={data.academic[2].endDate}
                            institution={data.academic[2].institution} />
                        <AcademicCard name={data.academic[3].name}
                            startDate={data.academic[3].startDate}
                            endDate={data.academic[3].endDate}
                            institution={data.academic[3].institution} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}