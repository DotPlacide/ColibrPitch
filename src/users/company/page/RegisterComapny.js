import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

const RegisterCompany = () => {
    const [company , setCompany] = useState({fullName:'' , email:''  ,country:'',size:'' , password:''});
    const {fullName , email , country  ,size, password} = company ;
    const handleChange = e => {
        setCompany({...company , [e.target.name]: e.target.value})
    };
    const submit = e => {
        e.preventDefault()
        console.log({fullName , email , country  ,size, password})
        // Do Axios Post Request Here
        axios.post('http://localhost:5000/companyregister' , company,{ headers:{'Content-Type': 'application/json'}}).then(res => console.log(res.data))
            .catch(err => console.log(err));

    };
    return (
        <div className='container col-md-8'>
            <form onSubmit={submit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Company name </label>
                    <input type="text" className="form-control" name="fullName" value={fullName} onChange={handleChange}  placeholder="company name"/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handleChange} placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Company Size </label>
                    <select className='form-control' name="size" value={size} onChange={handleChange} id="" >
                        <option value='Size of your company'> Size of your company </option>
                        <option value='10-100'>10 - 100 </option>
                        <option value='100-300'>100 - 300 </option>
                        <option value='300-500'>300 - 500 </option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Company location </label>
                    <select className='form-control' name="country" value={country} onChange={handleChange} id="" >
                        <option value='Size of your company'> Select country </option>
                        <option value='Ghana'>Ghana </option>
                        <option value='Kenya'>Kenya </option>
                        <option value='cote divoire'>Cote d'ivoire</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} value={password}  placeholder="Enter password"  />
                </div>

                <button type="submit" className="btn btn-primary btn-block" ><Link Style={'color:white'} to="/post/NEW">Sign Up</Link></button>
                <p className="forgot-password text-right">
                        <a href="#">Forget password ?</a>
                </p>
                <div>
                    <p>Already have an account ? <Link to="/ui/Dashboard">Sign in</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterCompany;