import React, { useState } from "react";
import "../css/Level10.css";
import { IconButton, Switch, FormControlLabel } from "@material-ui/core/";
import {
  ComputerIcon,
  DevicesIcon,
  WifiIcon,
  AppsIcon,
  AccountCircleIcon,
  AccessibilityIcon,
  SearchIcon,
  LockIcon,
  UpdateIcon,
  LocationOnIcon,
  CameraAltIcon,
  MicIcon,
  NotificationsIcon,
  RecentActorsIcon,
  CalendarTodayIcon,
  EmailIcon,
  AssignmentIcon,
  DevicesOtherIcon,
  AssessmentIcon,
  CloudIcon,
  InsertDriveFileIcon,
  ImageIcon,
  MovieIcon,
} from "../components/level10";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import PropTypes from "prop-types";

// Component for Level 10 - searching for a setting
export default function Level10(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to to the privacy settings by clicking the Privacy button.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the privacy button is clicked
  const [isPrivacyClicked, setIsPrivacyClicked] = useState(false);

  // handles when the privacy button is clicked by setting local state to true
  function handleClick(e) {
    props.logClick(e);
    setIsPrivacyClicked(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="find the privacy settings."
      hintMessage="Click on the button labeled Privacy."
      dialogMessage="Your mission is complete! Sometimes it is easier to search for a setting than clicking around to find it. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        {!isPrivacyClicked && (
          <div className="settings-container">
            <div
              className="settings-grid"
              id="level 10 system icon"
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
              id="level 10 devices icon"
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
              id="level 10 network icon"
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
              id="level 10 apps icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <AppsIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Apps</h4>
              <p>Uninstall, defaults, optional features</p>
            </div>
            <div
              className="settings-grid"
              id="level 10 accounts icon"
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
              id="level 10 accessibility icon"
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
              id="level 10 search icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <SearchIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Search</h4>
              <p>Find my files, permissions</p>
            </div>
            <div
              className="settings-grid"
              id="level 10 privacy icon"
              onClick={(e) => handleClick(e)}
            >
              <IconButton>
                <LockIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Privacy</h4>
              <p>Location, camera, microphone</p>
            </div>
            <div
              className="settings-grid"
              id="level 10 updates icon"
              onClick={(e) => props.logClick(e, 10)}
            >
              <IconButton>
                <UpdateIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Updates</h4>
              <p>Windows Update, recovery, backup</p>
            </div>
          </div>
        )}
        {isPrivacyClicked && (
          <div className="privacy-container">
            <div className="privacy-drawer">
              <div
                className="privacy-grid"
                id="level 10 location icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <LocationOnIcon fontSize="large" />
                </IconButton>
                <p className="item">Location</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 camera icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <CameraAltIcon fontSize="large" />
                </IconButton>
                <p className="item">Camera</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 microphone icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <MicIcon fontSize="large" />
                </IconButton>
                <p className="item">Microphone</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 notifications icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <NotificationsIcon fontSize="large" />
                </IconButton>
                <p className="item">Notifications</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 contacts icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <RecentActorsIcon fontSize="large" />
                </IconButton>
                <p className="item">Contacts</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 calendar icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <CalendarTodayIcon fontSize="large" />
                </IconButton>
                <p className="item">Calendar</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 email icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <EmailIcon fontSize="large" />
                </IconButton>
                <p className="item">Email</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 tasks icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <AssignmentIcon fontSize="large" />
                </IconButton>
                <p className="item">Tasks</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 other devices icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <DevicesOtherIcon fontSize="large" />
                </IconButton>
                <p className="item">Other Devices</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 app diagnostics icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <AssessmentIcon fontSize="large" />
                </IconButton>
                <p className="item">App Diagnostics</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 cloud icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <CloudIcon fontSize="large" />
                </IconButton>
                <p className="item">Cloud</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 documents icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <InsertDriveFileIcon fontSize="large" />
                </IconButton>
                <p className="item">Documents</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 pictures icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <ImageIcon fontSize="large" />
                </IconButton>
                <p className="item">Pictures</p>
              </div>
              <div
                className="privacy-grid"
                id="level 10 videos icon"
                onClick={(e) => props.logClick(e, 10)}
              >
                <IconButton>
                  <MovieIcon fontSize="large" />
                </IconButton>
                <p className="item">Videos</p>
              </div>
            </div>
            <div>
              <h1>General</h1>
              <h3>Change privacy options</h3>
              <p>
                Let apps use advertising ID to make ads more interesting to you
                based on your app activity
              </p>
              <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
              />
              <p>
                Let websites provide locally relevant content by accessing my
                language list
              </p>
              <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
              />
              <p>Let the system track app launches to improve search results</p>
              <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
              />
              <p>Show me suggessted content in the Settings app</p>
              <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
              />
              <br />
              <br />
              <Jewel logClick={props.logClick} />
            </div>
          </div>
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level10.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
