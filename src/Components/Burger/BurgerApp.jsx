import React from 'react'

import {Redirect, Route, Switch} from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Navigation from '../Navigation/Navigation';
import Login from '../Forms/Login';

const BurgerApp = () => {
   
    return (
        <> 
        <Navbar/>
        <Switch>
            <Route exact path = '/' component={Navigation}></Route>
            <Route exact path = '/login' component={Login}></Route>
            <Redirect to='/'/>
        </Switch>
        </>
    )
}

export default BurgerApp;
