import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { accountService } from '../_services';
import { PrivateRoute, Alert } from '../_components';
import { Home } from '../home';
import { Account } from '../account';

function App(props) {
    const { pathname } = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    return (
        <div>
            <Alert />
            <Switch>
                <PrivateRoute exact path="/level15/home" component={Home} handleFound={props.handleFound}/>
                <Route path="/level15/account" component={Account} />
                <Redirect from="/level15" to="/level15/home" />
            </Switch>
        </div>
    );
}

export { App };