import React, {Component} from 'react';
import testImage from   './img/test.jpg'
import {Link} from "react-router-dom";
import Logo from '../../../image/logo.png'
import './Test.css'
const TestPage = () => {
        return (
            <div >
                <div className='container'>
                   <div className="row">
                       <div className="col-md-6">
                           <div>
                               <img Style={'height:450 ; width: 650px'} src={testImage} alt=""/>
                           </div>
                       </div>
                       <div className="col-md-6">
                          <div className="testSideRigth">
                              <img Style={'height:350 ; width: 250px'} src={Logo} alt=""/>
                              <h1>Test assessment</h1>
                              <small>the test is a way for us to gauge your level, validate if you can join our page and
                                  above all suggest the appropriate projects to allow you to be much more production during
                                  the execution of the projects that we will suggest to you</small><br/>
                              <strong className="fontContent">You need to have 80%  to be allow to sign up to our platform</strong>
                              <br/><br/>
                              <button className=' btn btnMain'><Link Style={'color:white ; text-decoration:none'} to="workerregister">Start the test</Link></button>
                          </div>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
export default TestPage;