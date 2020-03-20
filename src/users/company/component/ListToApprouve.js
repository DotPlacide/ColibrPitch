import React from 'react';

const ApprouvalList = props =>{
    return(
        <div>
                <div className="car card-header bgWhite">
                    <h3 Style={'font-size:15px'}>{props.title}</h3>
                    <button Style={'float:right;margin-top: -40px;'} className="btn btnMain"><a Style={'color:white ; text-decoration:none'} href="/ui/dashboard">Approve</a></button>
                    <span Style={'font-size:10px'}>N° de projet : 24316078</span>
                </div>
        </div>
    )
}
export default ApprouvalList;