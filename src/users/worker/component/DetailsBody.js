import React from 'react';

const DetailsBody = props =>{
    return(
        <div>
            <div className="car cardDash card-header bgWhite"><h3>{props.title}</h3></div>
           <p className='fontContent'>{props.description}</p><hr/>
           <div className="row">
               <div className="col-md-4 detailsMore">
                   <i className='far fa-clock'/><strong className="SecondFont">{props.availibity}</strong><br/>
                   <span className="SecondFont" Style={'color: #888888'}>Hourly</span>

               </div>

               <div className="col-md-4 detailsMore">
                   <i className='far fa-clock'/><strong className="SecondFont">{props.term}</strong><br/>
                   <span className="SecondFont" Style={'color: #888888'}>Project length</span>

               </div>

               <div className="col-md-4 detailsMore">
                   <i className='far fa-clock'/><strong className="SecondFont">{props.projectType}</strong><br/>
                   <span className="SecondFont" Style={'color: #888888'}>Project length</span>

               </div>
           </div><hr/>
           <div>
               <strong>Project length : </strong>
               <span>{props.projectType}</span>
           </div><hr/>
            <div>
                <strong>Skills and expertise :</strong>
                <ul>
                    <li>Topic research</li>
                    <li>Writing</li>
                </ul>
            </div><hr/>
            <div>
                <strong>Info :</strong>
                <ul>
                    <li>Proposals : 5 to 10</li>
                    <li>Place available : 3</li>
                </ul>
            </div><hr/>
            <span Style={'float:right; font-size:10px'}>N° de projet : 24316078</span>
        </div>
    )
}
export default DetailsBody;