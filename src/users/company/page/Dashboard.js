import React from 'react'
import CompanyNav from "../component/Navbar";
import ListProject from "../component/ListProject";
import ListContract from "../component/ListContract";
import '../component/NavStyle.css'
import PendingListContract from "../component/PendingListContract";
const Dashboard = () =>{
    const Project = [
        {
            id: 'pj1',
            title:'Copy Data from json file and websites into CMS',
            description: 'Freelancer will need good English and website research skills. Work must be completed in 5 hours from job posting. Will take 1-2 hours to complete. I will explain further details and be available to answer questions upon freelancer selection.',
            time: 2,
            price: 10,
            Status: false,
        },
        {
            id: 'pj1',
            title:'Data entry -Virtual assistant',
            description: 'looking for data entry assistant, who will open specific website (thousands) and copy emails and categorize visited websites based on requirements to copy it in excel sheet . the project could take months and half or two',
            time: 2,
            price: 10,
            Status: true
        },
        {
            id: 'pj1',
            title: 'need someone to build upon preexisting list and find journalists in careers niche',
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
                'The rate of the project is 15 cents per contact you find.' +
                'https://docs.google.com/document/d/1uTTLRuniAuqTLlouFVhRTGZzBVe-ZkBy3vGBUHA',
            availibity: 'More than 30 hrs/week',
            price: 25,
            Status: true,
        }
    ];

    const Contract = [
        {
            id: 'c1',
            document: 'job01.pdf',
            jobStatus: false
        },
        {
            id: 'c2',
            document: 'job02.pdf',
            jobStatus: false
        },
        {
            id: 'c3',
            document: 'job03.pdf',
            jobStatus: true
        }
    ];

        return(
            <div className='bgDash'>
                <CompanyNav/>
                <ListProject items={Project}/>
                <PendingListContract contract={Contract}/>
                <ListContract contract={Contract}/>
            </div>
        )
};

export default Dashboard