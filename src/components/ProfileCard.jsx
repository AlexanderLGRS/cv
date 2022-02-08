import React from "react";
import imageDecoration from './Assets/team-decoration-1.jpg'
import Card from "./PersonalCard";
import data from '../data.json';
import './styles/profileCard.css';
import  profilePicture from './Assets/ProfilePicture.jpg'

export default function ProfileCard(props) {
    return (
        <React.Fragment>
            <div className="card-container">
                <div className="profile-card">
                    <img src={imageDecoration} alt="profile" className="profile-card-image" />
                    <div className="card-head">
                        <img src={profilePicture} alt="head" className="card-head-image" />
                        <div className="hover-content">
                            <Card
                                profile={data.data.profile}
                                github={data.social.github.url}
                                twitter={data.social.twitter.url}
                                linkedin={data.social.linkedin.url} />
                        </div>
                    </div>
                </div>
                <div className="principal-info">
                    <h4 className="">{data.data.name}</h4>
                    <p className="">{data.data.profession}</p>
                </div>
            </div>
        </React.Fragment >
    )
}