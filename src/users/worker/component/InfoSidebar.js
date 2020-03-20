import React, {Component} from 'react';
import './sidebar.css'
import SideItem from "./SideItem";
const InfoSidebar = props => {
        if(props.infos.length === 0 ){
            return (
                <div className="col-md-4">
                    {props.infos.map(info => <SideItem key={info.id} id={info.id} name={info.name} availibity={info.availibity} project={info.projectComplete} rank={info.rank} amount={info.amount}/>)}
                </div>
            );
        }
    return (
        <div className="col-md-4">
            {props.infos.map(info => <SideItem key={info.id} id={info.id} name={info.name} availibity={info.availibity} project={info.projectComplete} rank={info.rank} amount={info.amount}/>)}
        </div>
    );
};

export default InfoSidebar;