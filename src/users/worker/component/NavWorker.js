import React from 'react'
const NavWorker = () => {
    return(
        <div>
            <nav class="navbar topnav">
                <div className="container">
                    <div className="brands" Style={'margin-top: -25px;'}>
                        <a>COLIBRI</a>
                    </div>
                    <div className="navigation">
                        <ul className="nav-dropdwon">
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">JOBS</span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">SAVED</span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">REPORTS</span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">MESSAGES</span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">LOGOUT</span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label"><i className="fas fa-question fa-1x" /></span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label"><i className="fas fa-bell fa-1x"/></span></a></li>
                            <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label"><i className="fas fa-user-circle fa-1x"/></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default  NavWorker