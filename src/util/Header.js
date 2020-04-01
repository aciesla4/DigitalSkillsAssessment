import React from 'react';

export default function Header(props) {
    return (
        <div className="header">
            <div className="header-content">Your Mission is: {props.mission}</div>
        </div>
    );
}