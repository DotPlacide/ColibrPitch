import React from 'react';
import DescriptionItem from "../component/DescriptionItem";
import './details.css'
import NavWorker from "../component/NavWorker";
import JobList from "../component/JobList";
const ProjectDetails = props =>{
    const JobDetails = [
        {
            id: 'pr01',
            title:'need someone to build upon preexisting list and find journalists in careers niche',
            description: 'Our goal is to collect the contact info of writers and journalists so that we can pitch them our resume studies for them to potentially write about.\n' +
                '\n' +
                'We have a preexisting list already with a lot of contacts, but we are looking to expand upon it.\n' +
                '\n' +
                'Your job is to find as many writers as you possibly can who meet the following criteria -\n' +
                '\n' +
                '- writes on a site 45 DA or above (Must have MozBar to do this assignment)\n' +
                '- the site they write for has to link out in their articles and link out with DOFOLLOW links (if it\'s nofollow its useless to us)\n' +
                '- writes on topics close enough where there\'s a chance of them potentially writing about our resume studies\n' +
                '- is currently writing for the blog (no outdated contacts)\n' +
                '- has some sort of contact info we can reach them at\n' +
                '- is not already on our list\n' +
                '\n' +
                'for each entry you will include\n' +
                '- site name\n' +
                '- name of writer\n' +
                '- link of writer\'s author page or the author\'s most recent article\n' +
                '- writer\'s email/contact info\n' +
                '- link of where you found the writer\'s email/contact info\n' +
                '\n' +
                'The rate of the project is 15 cents per contact you find.'+
                'https://docs.google.com/document/d/1uTTLRuniAuqTLlouFVhRTGZzBVe-ZkBy3vGBUHA',
            availibity: 'More than 30 hrs/week',
            term: 'More than 6 months',
            type: 'Ongoing project',
        }
    ];
    return (
        <div className="bgDashworker">
            <NavWorker/>
            <DescriptionItem details={JobDetails}/>
        </div>

    )
}
export default ProjectDetails;