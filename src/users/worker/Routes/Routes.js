import React from 'react'
import {BrowserRouter as Router , Route , Switch ,Redirect} from "react-router-dom";
import RegisterWorker from "../page/registerWorker";
import LoginWorker from "../page/loginWorker";
import DashBoardUser from "../page/DashBoardUser";
import AuthApi from "../utils/AuthApi";

function Routes() {
        return(
            <Switch>
                <RouteRegistration path='/dashboard' component={DashBoardUser}/>
                <RouteRegistration path={'/workerlogin'} component={LoginWorker}/>
                <RouteProtected path={'/workerregister'} component={RegisterWorker}/>
            </Switch>
        )
}

const RouteRegistration = ({ component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi)
    return (
        <Route {...rest} render={ props => !authApi.auth ?  (<Component {...props} />) : <Redirect to="/dashboard" />
    }
    />
    )
};

const RouteProtected = ({ component: Component, ...rest}) => {
    const authApi= React.useContext(AuthApi)
    return(
        <Route {...rest} render={ props => authApi.auth ? (<Component {...props} />) : (<Redirect to="workerlogin"/>) } />
    )
};
export default Routes