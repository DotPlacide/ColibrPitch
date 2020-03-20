import React, {Component} from 'react';
import './ListProject.css'
import ListItem from "./ListItem";
import JobTemplate from "./JobTemplate";
const ListProject = (props) => {
    if(props.items.length === 0 ){
        return(
            <div className='container'>
                <h1>job list</h1>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card cardDash">
                            <div className="card-header bgWhite"><h3>Recent projects
                                </h3><span className='spanAll fontContent' Style={'float: right'}><a
                                href="">See everything <i className="fas fa-arrow-alt-circle-right"/></a></span></div>
                            <div className="card-body cardCenter">
                                <i className='fas fa-file fa-6x'/>
                                <p className="card-text">Start post jobs or projects that match with your need.</p>
                                <a href="post" className='btn btn-Second'>Post a job</a>
                            </div>
                        </div>
                    </div>
                    <JobTemplate/>
                </div>
            </div>
        )
    }
        return (
            <div className='container'>
                <h1>job list</h1>
               <div className="row">
                   <div className="col-md-8">
                       <div className="card cardDash">
                           <div className="card-header bgWhite"><h3>Recent Project</h3><span className='spanAll fontContent' Style={'float: right'}><a
                               href="" >See everything <i className="fas fa-arrow-alt-circle-right"/></a></span></div>
                           {props.items.map(Project => <ListItem key={Project.id} id={Project.id}  status={Project.status} title={Project.title} description={Project.description} price={Project.price} time={Project.time}/>)}
                       </div>
                   </div>
                   <JobTemplate/>
               </div>
            </div>
        );
    }

export default ListProject;