import React from 'react';

const JobItem = props =>{
    return (
        <div className="card-body itemCArd HoverCard">
            <div className="row">
                <span className="card-title hoverTitle"><a Style={'color:#3A314E'} href={`/projects/${props.id}`}>{props.title}</a></span>
                <span>Delivery : <strong>{props.projectDelivery}</strong></span><br/>
            </div>
           <span Style={'font-size: 15px;color: #888;'}><strong Style={'margin-right: 20px'}>Price : {props.price}</strong> <span Style={'color: #ff631a'}>{`Entry Level`}  - {`est.budget: $ 5 / h`} </span></span><br/>
           <span className="card-text fontContent">{props.description}</span><br/>
            <span>Proposal : <strong>{props.numberWorker}</strong></span><br/>

        </div>
    )
};
export default JobItem;