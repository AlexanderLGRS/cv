import React from "react";

export default function ProgressBar(props) {
    const { skill, percentage, color } = props;
    return (
        <React.Fragment>
            <div className="container-fluid mt-4">
                <span>{skill}</span>
                <div className="progress" style={{ border: '2px solid #f1f1f1', borderRadius: '10px', height: 20 }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{
                        border: '1px solid #f1f1f1', borderRadius: '10px', width: props.percentage + '%', backgroundColor: color, color: 'black'
                    }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </React.Fragment>
    )
}