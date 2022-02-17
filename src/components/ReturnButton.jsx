import React from "react";
import './styles/returnButton.css'

export default class ReturnButton extends React.Component {
    render() {
        return (
            <a href="#profile">
                <div className="return ">
                    <span></span>
                </div>
            </a>
        )
    }
}