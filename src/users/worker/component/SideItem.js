import React from 'react';

const SideItem = props =>{
    return (
        <div className="card cardDash topDash">
            <div className="card-header bgSide">
                <h3>{props.name}</h3>
                <span className='spanAll fontContent' Style={'float: right'}> Rank : {props.rank}</span>
                <span className='spanAll fontContent'><strong>Amount:</strong>  $ {props.amount},00 USD</span><br/>
            </div>

            <div className="card-body">
                <div className="container iconSidebar">
                    <i className='fas fa-history'/> <span>Work History</span><br/>
                </div>
                <div className="container iconSidebar">
                    <i className='far fa-clock'/> <span>Availability</span><br/>
                    <span className='spanAll fontContent'>{props.availibity} <i className='far fa-edit'/></span>
                </div>
                <div className="container iconSidebar">
                    <i className='far fa-check-circle'/> <span>Project Complete</span><br/>
                    <span className='spanAll fontContent'>{props.project}</span>
                </div>
                <span className='spanAll fontContent'></span><br/>
            </div>
        </div>

    )
};
export default SideItem;