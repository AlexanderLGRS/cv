import React from "react";
import './styles/header.css'
import ProfileCard from "./ProfileCard";
import logo from './Assets/react-icon.svg'

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav id="home" className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <img src={logo} className="header-icon" alt="React logo"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#profile">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills-section">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#academic-section">Academic</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience-section">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects-section">Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header id='profile'className="header">
                    <ProfileCard />
                </header>
            </React.Fragment>
        )
    }
}