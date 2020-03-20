import React from 'react';
import ApprouvalList from "../component/ListToApprouve";


const Approuval = props =>{
    return(
        <div className='container'>
            <h1>Validate job</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="card cardDash">
                        <div className="card-header bgdetail"></div>
                        <div className="card-body">
                            {props.jobstatusawait.map(detail => <ApprouvalList key={detail.id} id={detail.id} title={detail.title} description={detail.description} availibity={detail.availibity} term={detail.term} projectType={detail.type}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Approuval;