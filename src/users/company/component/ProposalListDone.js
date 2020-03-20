import React from 'react';
import CompagnyNav from "../component/Navbar";
import Approuval from "../page/Approuval";
const JObValidation = props =>{
    const done = [
        {
            id: "u7",
            title:'need someone to build upon preexisting list and find journalists in careers niche'
        }
    ];
    return (
        <div className="bgDashworker">
            <CompagnyNav/>
            <Approuval jobstatusawait={done}/>
        </div>

    )
}
export default JObValidation;