import React from "react";
import Card from "./PersonalCard";
import data from '../data.json';

export default class PersonalInfo extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="row p-0">
                    <Card name={data.data.name} profession={data.data.profession} address={data.data.address} email={data.data.email} phone={data.data.phone} website={data.data.website} profile={data.data.profile} />
                </div>
            </React.Fragment>
        )
    }
}