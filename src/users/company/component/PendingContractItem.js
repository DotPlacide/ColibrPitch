import React from 'react';

const PendingContractItem = props =>{
    if(props.status === false ){
        return (
            <div className="card-body itemCArd">
                <h5 className="card-title"><i className='far fa-file-pdf' Style={'margin-right:20px ; color:#3A314E'}/>< a Style={'margin-right:20px ; color:#3A314E'} href="">{props.document}</a></h5>
            </div>
        )
    }
    return(
        <div>

        </div>
    )
}
export default PendingContractItem;