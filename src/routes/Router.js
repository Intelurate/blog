import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        );
    }
}
