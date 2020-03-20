import React from 'react';
import DetailsBody from "./DetailsBody";
import CompanyDetails from "./CompagnyDetails";
import WorkHelp from "./WorkHelp";


const ContentWorking = props =>{
    return(
        <div className='container'>
            <h1>Working space</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="card cardDash">
                        <div className="card-header bgdetail"></div>
                        <div className="card-body">
                            {props.details.map(detail => <WorkHelp key={detail.id} id={detail.id} title={detail.title} description={detail.description} availibity={detail.availibity} term={detail.term} projectType={detail.type}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentWorking;