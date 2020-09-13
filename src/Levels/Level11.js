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

// Component for Level 11 - finding a setting and using a commitment menu
export default function Level11(props) {
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
    props.logClick(e);
    setIsPrivacyClicked(true);
  }

  // handles when the cloud button is clicked by setting local state to true and setting the color
  function handleCloudClick(e) {
    props.logClick(e);
    setIsCloudClicked(true);
    setColor("lightgray");
  }

  // handles when the notes checkbox is checked by setting local state to false and showing the jewel
  function handleNotesChange(e) {
    props.logClick(e);
    setNotesOn(false);
    setIsJewelShown(true);
  }

  return (
    <Level
      logClick={props.logClick}
      mission="stop saving Notes in your Cloud."
      hintMessage="Click on the button labeled privacy. Then scroll down on the left side to find the button labeled Cloud. Then uncheck the box labeled Notes."
      dialogMessage="Your mission is complete! Sometimes settings are buried in multiple menus. Click the X to return to the home page and receive your next mission."
    >
      <div>
        {!isPrivacyClicked && (
          <div className="settings-container">
            <div
              className="settings-grid"
              id="level 11 system icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <ComputerIcon fontSize="large" />
              </IconButton>
              <h4 className="item">System</h4>
              <p>Display, sound, notifications, power</p>
            </div>
            <div
              className="settings-grid"
              id="level 11 devices icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <DevicesIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Devices</h4>
              <p>Bluetooth, printers, mouse</p>
            </div>
            <div
              className="settings-grid"
              id="level 11 network icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <WifiIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Network</h4>
              <p>Wi-Fi, airplane mode, VPN</p>
            </div>
            <div
              className="settings-grid"
              id="level 11 apps icon"
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
              id="level 11 accounts icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Accounts</h4>
              <p>Your accounts, email, sync, work, family</p>
            </div>
            <div
              className="settings-grid"
              id="level 11 accessibility icon"
              onClick={(e) => props.logClick(e)}
            >
              <IconButton>
                <AccessibilityIcon fontSize="large" />
              </IconButton>
              <h4 className="item">Accessibility</h4>
              <p>Narrator, magnifier, high contrast</p>
            </div>
            <div
              className="settings-grid"
              id="level 11 search icon"
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
              id="level 11 privacy icon"
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
              id="level 11 updates icon"
              onClick={(e) => props.logClick(e)}
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
                id="level 11 location icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <LocationOnIcon fontSize="large" />
                </IconButton>
                <p className="item">Location</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 camera icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <CameraAltIcon fontSize="large" />
                </IconButton>
                <p className="item">Camera</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 microphone icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <MicIcon fontSize="large" />
                </IconButton>
                <p className="item">Microphone</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 notifications icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <NotificationsIcon fontSize="large" />
                </IconButton>
                <p className="item">Notifications</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 contacts icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <RecentActorsIcon fontSize="large" />
                </IconButton>
                <p className="item">Contacts</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 calendars icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <CalendarTodayIcon fontSize="large" />
                </IconButton>
                <p className="item">Calendar</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 email icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <EmailIcon fontSize="large" />
                </IconButton>
                <p className="item">Email</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 tasks icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <AssignmentIcon fontSize="large" />
                </IconButton>
                <p className="item">Tasks</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 other devices icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <DevicesOtherIcon fontSize="large" />
                </IconButton>
                <p className="item">Other Devices</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 app diagnostics icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <AssessmentIcon fontSize="large" />
                </IconButton>
                <p className="item">App Diagnostics</p>
              </div>
              <div
                className="privacy-grid"
                style={{ backgroundColor: color }}
                id="level 11 cloud icon"
                onClick={(e) => handleCloudClick(e)}
              >
                <IconButton>
                  <CloudIcon fontSize="large" />
                </IconButton>
                <p className="item">Cloud</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 documents icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <InsertDriveFileIcon fontSize="large" />
                </IconButton>
                <p className="item">Documents</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 pictures icon"
                onClick={(e) => props.logClick(e)}
              >
                <IconButton>
                  <ImageIcon fontSize="large" />
                </IconButton>
                <p className="item">Pictures</p>
              </div>
              <div
                className="privacy-grid"
                id="level 11 videos icon"
                onClick={(e) => props.logClick(e)}
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
                      id="level 11 mail checkbox"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="Mail"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="level 11 contacts checkbox"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="Contacts"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="level 11 calendars checkbox"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="Calendars"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="level 11 reminders checkbox"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="Reminders"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={notesOn}
                      id="level 11 notes checkbox"
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
                      id="level 11 photos checkbox"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="Photos"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="level 11 documents checkbox"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="Documents"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      id="level 11 videos checkbox"
                      onChange={(e) => props.logClick(e)}
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
                      id="level 11 ad id switch"
                      onChange={(e) => props.logClick(e)}
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
                      id="level 11 local content switch"
                      onChange={(e) => props.logClick(e)}
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
                      id="level 11 app launches switch"
                      onChange={(e) => props.logClick(e)}
                    />
                  }
                  label="On"
                />
                <p>Show me suggested content in the Settings app</p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={true}
                      id="level 11 suggested content switch"
                      onChange={(e) => props.logClick(e)}
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
