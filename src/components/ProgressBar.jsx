import React from "react";

export default function ProgressBar(props) {
    const { skill, percentage, color } = props;
    return (
        <React.Fragment>
            <div className="container-fluid">
                <span>{skill}</span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: props.percentage + '%', backgroundColor: props.color, color: 'black' }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">{percentage} %</div>
                </div>
            </div>
        </React.Fragment>
    )
}