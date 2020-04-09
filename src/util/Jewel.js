import React from 'react';
import '../App.css';
import { IconButton, SvgIcon} from '@material-ui/core';
import $ from "jquery";
import "../css/Jewel.css";

class Jewel extends React.Component {
    componentDidMount() {
        $(document).ready(function() {
            $(".jewel").click(function() {
                $(".animates").css("animation-play-state", "paused");
            });
        })
    }

    render() {
        return (
            <IconButton className="jewel" style={{ margin: 0, position: 'absolute', top: this.props.top, left: this.props.left }} color="inherit" onClick={this.props.handleFound}>
                <SvgIcon className="animates" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z" />
                </SvgIcon>
            </IconButton>
        );
    }
}

export default Jewel;