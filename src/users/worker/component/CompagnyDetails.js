import React from 'react';

const CompanyDetails = props =>{
    return (
        <div className="card cardDash">
            <div className="card-header bgSide">
                <i className="far fa-location"/><h3>Ghana</h3><button className="btn btnMain btn-lg" Style={'float:left'}>
                <a Style={'color:#fff ; text-decoration:none'} href="/WorkSpace">Start</a></button>
            </div>

            <div className="card-body">
                <i className="far fa-location"/><span> 0 project posted</span>
                <div>
                    <h5>Compagny verification</h5>
                    <ul>
                        <li>Payment processing </li>
                        <li>Payment done</li>
                        <li>Email verify</li>
                        <li>Profil complete</li>
                        <li>Phone number verify</li>
                    </ul>
                </div>
            </div>
        </div>

    )
};
export default CompanyDetails;