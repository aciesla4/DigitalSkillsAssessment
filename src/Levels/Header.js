import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export default function Header(props) {
    return (
        <AppBar style={{ backgroundColor: '#fff', color: 'black' }}>
            <Toolbar>
                Your Mission is: {props.mission}
            </Toolbar>
        </AppBar>
    );
}