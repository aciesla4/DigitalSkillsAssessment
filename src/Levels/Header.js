// import React from 'react';
// import '../App.css';
// import { AppBar, Toolbar } from '@material-ui/core';
//
//
// class Header extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//
//     render() {
//         return (
//           <div>
//               <AppBar position="fixed" style={{ backgroundColor: '#fff', color: 'black' }}>
//                   <Toolbar>
//                       Your Mission is: {this.props.mission}
//                   </Toolbar>
//               </AppBar>
//           </div>
//         );
//     }
// }
//
// export default Header;


import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header(props) {
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar style={{ backgroundColor: '#fff', color: 'black' }}>
                    <Toolbar>
                        Your Mission is: {props.mission}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}