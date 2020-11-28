import React from "react";
import { IconButton } from "@material-ui/core";
import {
    AssessmentIcon,
    AssignmentIcon,
    CalendarTodayIcon,
    CameraAltIcon, CloudIcon, DevicesOtherIcon,
    EmailIcon, ImageIcon, InsertDriveFileIcon,
    LocationOnIcon,
    MicIcon, MovieIcon,
    NotificationsIcon,
    RecentActorsIcon
} from "./index";

export default function Drawer(props) {
    return (
        <div className="privacy-drawer">
            <div
                className="privacy-grid"
                id="Navigated to the Location settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <LocationOnIcon fontSize="large" />
                </IconButton>
                <p className="item">Location</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Camera settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <CameraAltIcon fontSize="large" />
                </IconButton>
                <p className="item">Camera</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Microphone settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <MicIcon fontSize="large" />
                </IconButton>
                <p className="item">Microphone</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Notifications settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <NotificationsIcon fontSize="large" />
                </IconButton>
                <p className="item">Notifications</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Contacts settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <RecentActorsIcon fontSize="large" />
                </IconButton>
                <p className="item">Contacts</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Calendar settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <CalendarTodayIcon fontSize="large" />
                </IconButton>
                <p className="item">Calendar</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Email settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <EmailIcon fontSize="large" />
                </IconButton>
                <p className="item">Email</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Tasks settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <AssignmentIcon fontSize="large" />
                </IconButton>
                <p className="item">Tasks</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Other Devices settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <DevicesOtherIcon fontSize="large" />
                </IconButton>
                <p className="item">Other Devices</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the App Diagnostics settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <AssessmentIcon fontSize="large" />
                </IconButton>
                <p className="item">App Diagnostics</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Cloud settings."
                onClick={(e) => props.handleClick(e)}
            >
                <IconButton>
                    <CloudIcon fontSize="large" />
                </IconButton>
                <p className="item">Cloud</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Documents settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <InsertDriveFileIcon fontSize="large" />
                </IconButton>
                <p className="item">Documents</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Pictures settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <ImageIcon fontSize="large" />
                </IconButton>
                <p className="item">Pictures</p>
            </div>
            <div
                className="privacy-grid"
                id="Navigated to the Videos settings."
                onClick={(e) => props.logClick(e, 10)}
            >
                <IconButton>
                    <MovieIcon fontSize="large" />
                </IconButton>
                <p className="item">Videos</p>
            </div>
        </div>
    )
}