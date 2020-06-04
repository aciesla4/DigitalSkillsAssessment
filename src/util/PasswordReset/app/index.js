import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { accountService } from '../_services';
import { PrivateRoute, Alert } from '../_components';
import { Home } from '../home';
import { Account } from '../account';

function App() {
    const { pathname } = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    return (
        <div className="">
            <Alert />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/level15/account" component={Account} />
                <Redirect from="/level15" to="/" />
            </Switch>
        </div>
    );
}

export { App };