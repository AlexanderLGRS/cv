import React from "react";

export default function ProgressBar(props) {
    const { skill, percentage } = props;
    return (
        <React.Fragment>
            <div className="container-fluid mt-4">
                <span>{skill}</span>
                <div className="progress" style={
                    {
                        border: '1px solid #fff',
                        borderRadius: '10px', height: 20,
                        backgroundColor: '#0b1a21'
                    }}>
                    <div className="progress-bar " role="progressbar" style={{
                        border: '1px solid #0b1a21',
                        borderRadius: '10px',
                        width: props.percentage + '%',
                        backgroundColor: '#f0f712', color: 'black'
                    }}
                        aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>{percentage + '%'}</span>
            </div>
        </React.Fragment>
    )
}