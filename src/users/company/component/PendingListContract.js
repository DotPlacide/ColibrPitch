import React, {Component} from 'react';
import PendingContractItem from './PendingContractItem'
const PendingListContract = (props) => {
    if(props.contract.length === 0 ){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card cardDash">
                            <div className="card-header bgWhite"><h3>My pending contract</h3><span className='spanAll fontContent' Style={'float: right'}><a
                                href="">See everything <i className="fas fa-arrow-alt-circle-right"/></a></span></div>
                            <div className="card-body cardCenter">
                                <p className="card-text">There are no pending contracts at the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <div className="card cardDash">
                        <div className="card-header bgWhite"><h3>My pending contract</h3><span className='spanAll fontContent' Style={'float: right'}><a
                            href="" >See everything <i className="fas fa-arrow-alt-circle-right"/></a></span></div>
                        {props.contract.map(contract => <PendingContractItem key={contract.id} id={contract.id} document={contract.document} status={contract.jobStatus}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingListContract;