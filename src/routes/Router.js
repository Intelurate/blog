import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import User from './User/User';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/user/:userId' exact component={User}/>
            </Switch>
        );
    }
}
