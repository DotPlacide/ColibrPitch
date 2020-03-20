import React, {Component} from 'react';

class JobTemplate extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card cardDash">
                    <div className="card-header bgWhite"><h3>Job Templates</h3><span className='spanAll fontContent'
                                                                                    Style={'float: right'}><a
                        href="">See everything</a></span></div>
                    <div className="card-body itemCArd">
                        <div className="row Templates">
                            <a href="" Style={'text-decoration:none ; color:#212529'}><i className='fas fa-file-alt fa-1x'/><span Style={'font-size:13px ;margin-left: 17px;'}>Data entry specialist services<strong
                            className='special'> > </strong></span></a>
                        </div>
                    </div>
                    <div className="card-body itemCArd">
                        <div className="row Templates">
                            <a href="" Style={'text-decoration:none ; color:#212529'}><i className='fas fa-file-alt fa-1x'/><span Style={'font-size:13px ;margin-left: 17px;'}>Virtual/Administrative Assistance<strong
                                className='special'> > </strong></span></a>
                        </div>
                    </div>
                    <div className="card-body itemCArd">
                        <div className="row Templates">
                            <a href="" Style={'text-decoration:none ; color:#212529'}><i className='fas fa-file-alt fa-1x'/><span Style={'font-size:13px ;margin-left: 17px;'}>Online Research<strong
                                className='special'> > </strong></span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobTemplate;