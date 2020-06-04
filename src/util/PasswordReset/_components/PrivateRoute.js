import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { accountService } from '../_services';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            const user = accountService.userValue;
            if (!user) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/level15/account/login', state: { from: props.location } }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };