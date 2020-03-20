import React from 'react';

const SearchJob = (props) => {
    return(
        <div className="input-group down-search">
            <input type="text" className="form-control has-search" placeholder="Search for job"/>
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">
                        < i className="fa fa-search"/>
                    </button>
                </div>
        </div>
    )
}

export default SearchJob;