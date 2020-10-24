import React, { useState } from "react";
import "../css/Level10.css";
import {
  IconButton,
  Switch,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core/";
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

// Component for Level 11 - finding a setting and using a commitment menu
export default function Level11(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to to the privacy settings by clicking the Privacy button.</li>
        <li>Navigate to the cloud settings scrolling down in the menu on the left.</li>
        <li>Navigate to the cloud settings by clicking on the Cloud button in the left menu.</li>
        <li>Change the notes settings by unchecking the box next to Notes.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the privacy button is clicked
  const [isPrivacyClicked, setIsPrivacyClicked] = useState(false);
  // local state for if the cloud button is clicked
  const [isCloudClicked, setIsCloudClicked] = useState(false);
  // local state for setting the color of buttons that have been clicked
  const [color, setColor] = useState("");
  // local state for if the noted checkbox is checked
  const [notesOn, setNotesOn] = useState(true);
  // local state for if the jewel is shown
  const [isJewelShown, setIsJewelShown] = useState(false);

  // handles when the privacy button is clicked by setting local state to true
  function handlePrivacyClick(e) {
    props.logClick(e, 11);
    setIsPrivacyClicked(true);
  }

  // handles when the cloud button is clicked by setting local state to true and setting the color
  function handleCloudClick(e) {
    props.logClick(e, 11);
    setIsCloudClicked(true);
    setColor("lightgray");
  }

  // handles when the notes checkbox is checked by setting local state to false and showing the jewel
  function handleNotesChange(e) {
    props.logClick(e, 11);
    setNotesOn(false);
    setIsJewelShown(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="stop saving Notes in your Cloud."
      hintMessage="Click on the button labeled privacy. Then scroll down on the left side to find the button labeled Cloud. Then uncheck the box labeled Notes."
      dialogMessage="Your mission is complete! Sometimes settings are buried in multiple menus. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <div>
        {!isPrivacyClicked && (
          <div className="settings-container">
            <div
              className="settings-grid"
              id="Navigated to the System settings."
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => props.logClick(e, 11)}
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
              onClick={(e) => handlePrivacyClick(e)}
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
              onClick={(e) => props.logClick(e, 11)}
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
                id="Navigated to the Location settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <LocationOnIcon fontSize="large" />
                </IconButton>
                <p className="item">Location</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Camera settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <CameraAltIcon fontSize="large" />
                </IconButton>
                <p className="item">Camera</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Microphone settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <MicIcon fontSize="large" />
                </IconButton>
                <p className="item">Microphone</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Notifications settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <NotificationsIcon fontSize="large" />
                </IconButton>
                <p className="item">Notifications</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Contacts settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <RecentActorsIcon fontSize="large" />
                </IconButton>
                <p className="item">Contacts</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Calendars settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <CalendarTodayIcon fontSize="large" />
                </IconButton>
                <p className="item">Calendar</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Email settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <EmailIcon fontSize="large" />
                </IconButton>
                <p className="item">Email</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Tasks settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <AssignmentIcon fontSize="large" />
                </IconButton>
                <p className="item">Tasks</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Other Devices settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <DevicesOtherIcon fontSize="large" />
                </IconButton>
                <p className="item">Other Devices</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the App Diagnostics settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <AssessmentIcon fontSize="large" />
                </IconButton>
                <p className="item">App Diagnostics</p>
              </div>
              <div
                className="privacy-grid"
                style={{ backgroundColor: color }}
                id="Navigated to the Cloud settings."
                onClick={(e) => handleCloudClick(e)}
              >
                <IconButton>
                  <CloudIcon fontSize="large" />
                </IconButton>
                <p className="item">Cloud</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Documents settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <InsertDriveFileIcon fontSize="large" />
                </IconButton>
                <p className="item">Documents</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Pictures settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <ImageIcon fontSize="large" />
                </IconButton>
                <p className="item">Pictures</p>
              </div>
              <div
                className="privacy-grid"
                id="Navigated to the Videos settings."
                onClick={(e) => props.logClick(e, 11)}
              >
                <IconButton>
                  <MovieIcon fontSize="large" />
                </IconButton>
                <p className="item">Videos</p>
              </div>
            </div>
            {isCloudClicked ? (
              <div>
                <h1>Cloud</h1>
                <h3>Change which items are stored in the cloud</h3>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Mail settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Mail"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Contacts settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Contacts"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Calendars settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Calendars"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Reminders settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Reminders"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={notesOn}
                      id="Changed the Notes settings."
                      onChange={(e) => handleNotesChange(e)}
                    />
                  }
                  label="Notes"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Photos settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Photos"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Documents settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Documents"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="Changed the Videos settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="Videos"
                />
                <br />
                <br />
                {isJewelShown && <Jewel logClick={props.logClick} />}
              </div>
            ) : (
              <div>
                <h1>General</h1>
                <h3>Change privacy options</h3>
                <p>
                  Let apps use advertising ID to make ads more interesting to
                  you based on your app activity
                </p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={true}
                      id="Changed the Ad ID settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="On"
                />
                <p>
                  Let websites provide locally relevant content by accessing my
                  language list
                </p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={true}
                      id="Changed the Local Content settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="On"
                />
                <p>
                  Let the system track app launches to improve search results
                </p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={true}
                      id="Changed the App Launches settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="On"
                />
                <p>Show me suggested content in the Settings app</p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={true}
                      id="Changed the Suggested Content settings."
                      onChange={(e) => props.logClick(e, 11)}
                    />
                  }
                  label="On"
                />
                <br />
                <br />
              </div>
            )}
          </div>
        )}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level11.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}