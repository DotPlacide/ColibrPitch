import React from 'react';

const ListItem = props =>{
        return (
            <div className="card-body itemCArd">
                <h5 className="card-title"><a href="" Style={'color: #3A314E'}>{props.title}</a></h5>
                <a href="/approuval" Style={'margin-bottom:20px'} className='btn btn-outline btn-info'>Check your jobs status</a>
                <div className="row">
                    <span>price : ${props.price} / hours   <span className='separate'> | </span></span>
                    <span>{props.time}</span>
                    <span Style={"color:#FF631A ; font-weight:bold"}>Status : {props.status === false ? 'submitted' : 'Not started'}</span>
                </div>
                <span className="card-text fontContent">{props.description}</span>

            </div>
        )
    };
export default ListItem;