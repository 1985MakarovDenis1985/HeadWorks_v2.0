import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ClientsBox from "./components/content/ClientsBox";
import RegistrationBox from "./components/content/RegistrationBox";
import AboutBox from "./components/content/AboutBox";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/clients" component={ClientsBox}/>
            <Route path="/registration" component={RegistrationBox}/>
            <Route path="/about_me" component={AboutBox}/>
            <Route path="*" component={ClientsBox}></Route>
        </Switch>
    )
}

export default Routes