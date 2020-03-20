import React, {useEffect , useState} from 'react';
import './nav.css'
import NavWorker from "../component/NavWorker";
import JobList from "../component/JobList";
import axios from 'axios'
const DashBoardUser = ()=> {
    //Project data for job list in the part of the worker
        const [Project , setProject] = useState([]);

        useEffect(()=>{
            axios.get('http://localhost:5000/project' ).then(response =>{
                console.log(response);
                setProject(response.data)
            }).catch(err => console.log(err))

        }, [])
        return (
            <div className="bgDashworker">
                <NavWorker/>
                <JobList job={Project}/>
            </div>
        );
    };
export default DashBoardUser;