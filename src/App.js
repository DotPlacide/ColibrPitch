import React, {useState}from 'react';
import './App.css';
import Homepage from "./users/company/page/Homepage";
import {BrowserRouter as Router , Route , Switch } from "react-router-dom";
import PostJob from "./users/company/page/PostJob";
import Dashboard from "./users/company/page/Dashboard";
import DashBoardUser from "./users/worker/page/DashBoardUser";
import ProjectDetails from "./users/worker/page/ProjectDetails";
import LoginWorker from "./users/worker/page/loginWorker";
import RegisterWorker from "./users/worker/page/registerWorker";
import RegisterCompany from "./users/company/page/RegisterComapny";
import LoginCompany from "./users/company/page/LoginCompany";
import AuthApi from './users/worker/utils/AuthApi'
import WorkSpace from "./users/worker/page/workSpace";
import Approuval from "./users/company/page/Approuval";
import JObValidation from "./users/company/component/ProposalListDone";
import TestPage from "./users/worker/page/TestPage";

const App = () => {
    const [auth , setAuth] = useState(false);
  return (
    <Router>
      <Switch>
          <Route path='/' exact>
              <Homepage/>
          </Route>
          <Route path='/post/new'>
              <PostJob/>
          </Route>

          <Route path='/ui/Dashboard'>
              <Dashboard/>
          </Route>
          <Route path={'/projects'}>
              <ProjectDetails/>
          </Route>
          <Route path={'/workerlogin'}>
              <LoginWorker/>
          </Route>
          <Route path={'/workerregister'}>
              <RegisterWorker/>
          </Route>
          <Route path={'/companyregister'}>
              <RegisterCompany/>
          </Route>
          <Route path={'/companyauth'}>
              <LoginCompany/>
          </Route>

          <Route path={'/dashboard'}>
              <DashBoardUser/>
          </Route>
          <Route path={'/WorkSpace'}>
              <WorkSpace/>
          </Route>
          <Route path={'/Approuval'}>
              <JObValidation/>
          </Route>

          <Route path={'/TestPage'}>
              <TestPage/>
          </Route>
      </Switch>
      </Router>
  )
};

export default App;
