import React from "react";

export default function Card(props) {
    const { profile, twitter, github, linkedin } = props;
    return (
        <React.Fragment>
            <div className="card-body">
                <h4 className="card-title">Hello & Welcome</h4>
                <h4 className="card-subtitle ">{profile}</h4>
                <div className="social-link">
                    <a href={github} target="_blank" rel="noreferrer"  ><ion-icon name="logo-github"></ion-icon></a>
                    <a href={twitter} target="_blank" rel="noreferrer" ><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href={linkedin} target="_blank" rel="noreferrer" ><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
            </div>
        </React.Fragment>
    )
}