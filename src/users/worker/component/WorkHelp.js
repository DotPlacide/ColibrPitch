import React from 'react';
import SubmitPart from "./submitPart";

const WorkHelp = props =>{
    return(
        <div>
            <div className="car cardDash card-header bgWhite"><h3>{props.title}</h3></div>
            <p>{props.description}</p><hr/>
                <SubmitPart/>
            <hr/>
            <span Style={'float:right; font-size:10px'}>N° de projet : 24316078</span>
            <div>
                <strong>Project length : </strong>
                <span>{props.projectType}</span>
            </div>
        </div>
    )
}
export default WorkHelp;