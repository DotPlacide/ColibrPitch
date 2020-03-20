import React from 'react';
import DetailsBody from "./DetailsBody";
import CompanyDetails from "./CompagnyDetails";


const DescriptionItem = props =>{
    return(
        <div className='container'>
        <h1>Project description</h1>
        <div className="row">
            <div className="col-md-8">
                <div className="card cardDash">
                    <div className="card-header bgdetail"></div>
                    <div className="card-body">
                        {props.details.map(detail => <DetailsBody key={detail.id} id={detail.id} title={detail.title} description={detail.description} availibity={detail.availibity} term={detail.term} projectType={detail.type}/>)}
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <CompanyDetails/>
            </div>
        </div>
    </div>
)
}
export default DescriptionItem;