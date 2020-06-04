import React from 'react';

import { accountService } from '../_services';

function Home() {
    const user = accountService.userValue;

    return (
        <div className="">
            <div className="">
                <br/><br/><br/>
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
            </div>
        </div>
    );
}

export { Home };