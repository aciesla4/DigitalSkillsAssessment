import React from "react";
import "../../css/SideNav.css";
import { IconButton, Divider } from "@material-ui/core";
import CloseIcon  from "@material-ui/icons/Close";

export default function SideNav(props) {
    let style = 'side-nav'
    if (props.open) {
        style = 'side-nav open'
    }
    return (
        <div className={style}>
            <IconButton style={{ position: 'absolute', top: 0, right: 0 }} onClick={(e) => props.onClose(e)} id="Changed side menu to be closed.">
                <CloseIcon />
            </IconButton>
            <div style={{ paddingLeft: '10px', cursor: 'pointer' }}>
                <h3>Hello Agent</h3>
                <Divider />
                <p>Account</p>
                <p>Track Orders</p>
                <p>Reorder Items</p>
                <p onClick={() => console.log("favorites clicked")}>Favorites</p>
                <Divider/>
                <h3>Departments</h3>
                <p>Clothing</p>
                <p>Spy Gear</p>
                <p>Communication Devices</p>
                <p>Technology</p>
                <p>Online Training Courses</p>
                <p>Graduation</p>
            </div>
        </div>
    )
}