import React from 'react';
import SearchJob from "./SearchJob";
import JobItem from "./JobItem";
import InfoSidebar from "./InfoSidebar";
const JobList = (props) => {
    const UserInfo = [
        {
            id: 'u01',
            name: 'Segua Olomide',
            availibity: 'More than 30 hrs/week',
            projectComplete: 8,
            rank: 4.5,
            amount: 50

        }
    ];

    if(props.job.length === 0 ){
        return(
            <div className='container'>
                <h1>Suggestion List</h1>
                <div className="row">
                    <div className="col-md-8">
                        <SearchJob/>
                        <div className="card cardDash">
                            <div className="card-header bgWhite"><h3>My feed</h3><span className='spanAll fontContent' Style={'float: right'}><a
                                href="">See everything <i className="fas fa-arrow-alt-circle-right"/></a></span></div>
                            <div className="card-body cardCenter">
                                <i className='fas fa-file fa-6x'/>
                                <p className="card-text">no more project for now </p>
                            </div>
                        </div>
                    </div>
                    <InfoSidebar infos={UserInfo}/>
                </div>
            </div>
        )
    }

    return(
        <div className='container'>
            <h1>Suggestion List</h1>
            <div className="row">
                <div className="col-md-8">
                    <SearchJob/>
                    <div className="card cardDash">
                        <div className="card-header bgWhite"><h3>My feed</h3><span className='spanAll fontContent' Style={'float: right'}><a
                            href="">See everything <i className="fas fa-arrow-alt-circle-right"/></a></span></div>
                        {props.job.map(Project => <JobItem key={Project._id} id={Project._id}  status={Project.status} title={Project.title} description={Project.description} price={Project.amount} numberWorker={Project.numberWorker} projectDelivery={Project.projectDelivery}  skills={Project.skills} />)}
                    </div>
                </div>
                <InfoSidebar infos={UserInfo}/>
            </div>
        </div>
    )
};

export default JobList;