import React from 'react';
import './header.css'
import logo from '../../../image/logo.png'
const Header = () => {
    return (
        <div className='bgeader overlayBg'>
            <nav className="navbar navbar-expand-md navMenu ">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><img Style={'height:25px ; width:45'} src={logo}
                                                                  alt=""/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//codeply.com">For Candidates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">For Employers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/TestPage">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">or Register</a>
                        </li>
                        <button className="btn btn-search" Style={'margin-left:20px'}><a href="/companyregister">Post a Job</a></button>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="container">
                    <div className="banner-headline-alt">
                        <h3>
                            <strong>Find Job</strong>
                            <span>We give Jobs to young africans talent</span>
                        </h3>

                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="fied-search ripple-effect">
                                <label className="distant" htmlFor="">What are you looking for </label>
                                <input type="text" className="card" placeholder="Job title  , Skill , Type of Job"/>
                            </div>
                            <div className="fied-search ripple-effect">
                                <label className="distant" htmlFor="">Where to look</label>
                                <input type="text" className="card" placeholder="Job title  , Skill , Type of Job"/>
                            </div>
                            <div className="fied-search ripple-effect">
                                <label className="distant" htmlFor="">Categories</label>
                                <select className="form-control card oersi">
                                    <option>All Categories</option>
                                </select>
                            </div>
                            <div className="fied-search ripple-effect">
                                <button className='btn btn-search'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;