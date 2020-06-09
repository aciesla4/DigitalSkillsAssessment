import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { accountService } from '../_services';

import { Login } from './Login';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';

function Account({ history, match }) {
    const { path } = match;

    useEffect(() => {
        // redirect to home if already logged in
        if (accountService.userValue) {
            history.push('/level15/home');
        }
    }, []);

    return (
        <div className="login">
            <Switch>
                <Route path={`${path}/login`} component={Login} />
                <Route path={`${path}/forgot-password`} component={ForgotPassword} />
                <Route path={`${path}/reset-password`} component={ResetPassword} />
            </Switch>
        </div>
    );
}

export { Account };