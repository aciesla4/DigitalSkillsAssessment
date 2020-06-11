import React from 'react';
import Jewel from '../../Jewel';

function Profile(props) {
    return (
        <Jewel left='50%' handleFound={props.handleFound}/>
    );
}

export { Profile };