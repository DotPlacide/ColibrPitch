import React, {useState} from 'react';
import {Link} from "react-router-dom";
import makeAnimated from 'react-select/animated';
import { category } from './data/data';
import axios from "axios";


const RegisterWorker = () => {
    const [worker , setWorker] = useState({fullName:'' , email:'' ,availability:'' , age:'' , testScore:80 , category:'' ,country:'' , password:''});
    const {fullName , email , age , availability , category , country  , testScore , password} = worker ;
    const handleChange = e => {
        setWorker({...worker , [e.target.name]: e.target.value})
    };
    const submit = e => {
        e.preventDefault()
        console.log({fullName , email , age , availability , category , country  , testScore , password})
        // Do Axios Post Request Here
        axios.post('http://localhost:5000/becomeAworker' , worker,{ headers:{'Content-Type': 'application/json'}}).then(res => console.log(res.data))
            .catch(err => console.log(err));

    };
    return (
            <div className='container col-md-8'>
                <form onSubmit={submit}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>FullName</label>
                        <input type="text" className="form-control" name="fullName" value={fullName} placeholder="First name" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={email} placeholder="Last name" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Date of birth</label>
                        <input type="date" className="form-control"  name="age" value={age} placeholder="Enter email" onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Category of work you can do</label>
                                <select className='form-control' name="category" value={category} onChange={handleChange} id="" >
                                    <option  value='category of your work'>category of your work</option>
                                    <option  value='data entry'>data entry</option>
                                    <option value='virtual assistant'>virtual assistant</option>
                                    <option value='administrative support'>administrative support</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Country</label>
                                <select className='form-control' name="country"  value={country} onChange={handleChange} id="" >
                                    <option value="Country">Country</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Kenya">Kenya</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>availability</label>
                                <select className='form-control' name="availability" value={availability} onChange={handleChange} id="" >
                                    <option value='term of work'>Term work</option>
                                    <option value="short term work">short term work</option>
                                    <option value="long term project">long term project</option>
                                    <option value="both">both</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={password}  placeholder="Enter password" onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block"><Link Style={'color:white ; text-decoration:none'} to="/dashboard">Sign Up</Link></button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign up?</a>
                    </p>
                    <div>
                        <p>Already have an account ? <Link to="/dashboard">Sign in</Link></p>
                    </div>
                </form>
            </div>
        );
    };

export default RegisterWorker;