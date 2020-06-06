import React from 'react';
import Jewel from '../../Jewel';

function Home(props) {
    return (
        <Jewel left='50%' handleFound={props.handleFound}/>
    );
}

export { Home };