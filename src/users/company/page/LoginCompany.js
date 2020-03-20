import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

const LoginCompany = () => {
    const [company , setCompany] = useState({email:'' , password:''});
    const {email ,password} = company ;

    const handleChange = e => {
        setCompany({...company , [e.target.name]: e.target.value})
    };

    const submit = e => {
        e.preventDefault();
        axios.get('http://localhost:5000/companyauth' , company);
        console.log({email , password})

    };
    return (
        <div className='container col-md-8'>
            <form onSubmit={submit} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name='email' value={email} className="form-control" placeholder="Enter email" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' value={password} className="form-control" placeholder="Enter password" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <div>
                    <p>Don't have an account ? <Link to="/workerregister">Sign up</Link></p>
                </div>
            </form>

        </div>
    );
};
export default LoginCompany;