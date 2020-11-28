import React from 'react';
import { IconButton } from "@material-ui/core";
import {
    AccessibilityIcon,
    AccountCircleIcon,
    AppsIcon,
    ComputerIcon,
    DevicesIcon,
    LockIcon,
    SearchIcon, UpdateIcon,
    WifiIcon
} from "./index";

export default function Settings(props) {
    return (
        <div className="settings-container">
            <div
                className="settings-grid"
                id="Navigated to the System settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <ComputerIcon fontSize="large" />
                </IconButton>
                <h4 className="item">System</h4>
                <p>Display, sound, notifications, power</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Devices settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <DevicesIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Devices</h4>
                <p>Bluetooth, printers, mouse</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Network settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <WifiIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Network</h4>
                <p>Wi-Fi, airplane mode, VPN</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Apps settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <AppsIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Apps</h4>
                <p>Uninstall, defaults, optional features</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Accounts settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Accounts</h4>
                <p>Your accounts, email, sync, work, family</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Accessibility settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <AccessibilityIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Accessibility</h4>
                <p>Narrator, magnifier, high contrast</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Search settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <SearchIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Search</h4>
                <p>Find my files, permissions</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Privacy settings."
                onClick={(e) => props.handleClick(e)}
            >
                <IconButton>
                    <LockIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Privacy</h4>
                <p>Location, camera, microphone</p>
            </div>
            <div
                className="settings-grid"
                id="Navigated to the Updates settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <UpdateIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Updates</h4>
                <p>Windows Update, recovery, backup</p>
            </div>
        </div>
    )
}