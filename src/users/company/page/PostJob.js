import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './postjob.css'
import axios from "axios";
const PostJob = () => {
    const [jobs , setJob] = useState({title:'' , description:'',file:'' ,amount:'' ,creator:'meltwater', projectDelivery:'' ,  skills:'' ,numberWorker:'' });
    const {title , description , file , skills ,creator, projectDelivery , amount , numberWorker} = jobs ;

    const handleChange = e => {
        setJob({...jobs , [e.target.name]: e.target.value})
    };

    const submitjob = e => {
        e.preventDefault()
        // Do Axios Post Request Here
        axios.post('http://localhost:5000/postjob' , jobs,{ headers:{'Content-Type': 'application/json'}}).then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    return (
            <div className='bgPost'>
            <div className="container">
                <div className="header-title">
                    <h2>Tell us what you need done</h2>
                    <span>Contact skilled our workers within minutes.
                    View profiles, ratings, portfolios and chat with them. </span>
                </div>
                <div className="h-100  justify-content-center FormSpace">
                    <div className="card my-auto inside-card">
                        <div className="container">
                            <form onSubmit={submitjob} encType="multipart/form-data" className="inside">
                                <div className="form-group formSpace">
                                    <label htmlFor="">Choose a name for your project</label>
                                    <input className="form-control" type="text" name="title" value={title}  onChange={handleChange} placeholder='eg. Data entry'/>
                                </div>


                                <div className="form-group formSpace">
                                    <label htmlFor="exampleFormControlTextarea1">Tell us more about your project</label><br/>
                                    <span Style={'font-size: 6 ; color: gray'}>Start with a bit about yourself or your business, and include an overview of what you need done.</span>
                                    <textarea className="form-control" name="description" value={description} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"/>
                                    <div id="the-count">
                                        <span id="maximum">Please enter at least 30 characters.</span>
                                    </div>
                                </div>

                                <div className="form-group buttonFile">
                                    <label className="file-upload btn btn-Second"><i className="fas fa-cloud-upload-alt"/>Upload Files <input type="file" name="file" value={file} onChange={handleChange} /></label><br/>
                                 </div>

                                <ul className="file_added">
                                    <li><a href="#"><i className="fas fa-paperclip"/>national_id_card.png</a></li>
                                    <li><a href="#"><i className="fas fa-paperclip"/>national_id_card_back.png</a></li>
                                </ul>

                                <div className="form-group formSpace">
                                    <label htmlFor="exampleFormControlTextarea1">What skills are required?</label><br/>
                                    <span Style={'font-size: 6 ; color: gray'}>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.
                                    </span>
                                    <textarea className="form-control" name="skills" value={skills} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"/>
                                    <div id="the-count">
                                        <span id="maximum">Suggested skills: <a href="">Google sheet</a><a href="">Microsoft work</a><a
                                            href="">Excel</a></span>
                                    </div>
                                </div>
                                <div className="form-group formSpace">
                                    <label htmlFor="exampleFormControlTextarea1">How would you like to get it done?</label>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <label Style={'margin-right: 20px'}>
                                                <input type="radio" name="projectDelivery" value={`short term`}  onChange={handleChange} className="card-input-element d-none"
                                                       id="demo1"/>
                                                <div className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                                                    <div className="RadioChoose">
                                                        <i className="fas fa-clock fa-2x"/>
                                                        <h3 Style={'font-size:15px'}>Short-term or part-time work</h3>
                                                        <ul Style={'font-size:12px'}>
                                                            <li>Less than 30 hrs/week</li>
                                                            <li>
                                                                Less than 3 months
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </label>

                                            <label>
                                                <input type="radio" name="projectDelivery"  className="card-input-element d-none"
                                                       value={`long term`} onChange={handleChange} />
                                                <div
                                                    className="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                                                    <div className="RadioChoose">
                                                        <i className="fas fa-calendar-alt fa-2x"/>
                                                        <h3 Style={'font-size:15px'}>Dedicated, long term work</h3>
                                                        <ul Style={'font-size:12px'}>
                                                            <li>More than 30 hrs/week</li>
                                                            <li>
                                                                + 3 months
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group formSpace">
                                    <label htmlFor="">How many worker do you need</label>
                                    <select className="form-control col-md-2" name="numberWorker" value={numberWorker} onChange={handleChange} id="exampleFormControlSelect1">
                                        <option defaultValue="Workers">how many</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group formSpace">
                                    <label htmlFor="">What is your estimated budget?</label><br/>
                                    <span Style={'font-size: 6 ; color: gray'}> $ 5 USD / hour of work
                                    </span>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="text" name="amount" value={amount} onChange={handleChange} className="form-control col-md-1"
                                               aria-label="Amount (to the nearest dollar)"/>
                                    </div><br/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btnMain col-md-2"><Link to="/ui/Dashboard" Style={'color: white ; text-decoration:none'}>Post a job</Link></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    };
export default PostJob;