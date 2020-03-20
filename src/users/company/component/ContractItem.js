import React from 'react';

const ContractItem = props =>{
   if(props.status === true ){
       return (
           <div className="card-body itemCArd">
               <h5 className="card-title"><i className='far fa-file-pdf' Style={'margin-right:20px ; color:#3A314E'}/><a Style={'color:#3A314E'} href="">{props.document}</a></h5>
           </div>
       )
   }
   return(
       <div>

       </div>
   )
};
export default ContractItem;