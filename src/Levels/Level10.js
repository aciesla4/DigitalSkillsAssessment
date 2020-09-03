import React from "react";
import "../css/Level10.css";
import { IconButton, Switch, FormControlLabel } from "@material-ui/core/";
import ComputerIcon from "@material-ui/icons/Computer";
import DevicesIcon from "@material-ui/icons/Devices";
import WifiIcon from "@material-ui/icons/Wifi";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import SearchIcon from "@material-ui/icons/Search";
import LockIcon from "@material-ui/icons/Lock";
import UpdateIcon from "@material-ui/icons/Update";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CloudIcon from "@material-ui/icons/Cloud";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImageIcon from "@material-ui/icons/Image";
import MovieIcon from "@material-ui/icons/Movie";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";

class Level10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isJewelFound: false,
      academicmode: this.props.academicmode,
      isPrivacyClicked: false,
    };
  }

  handleFound = (e) => {
    this.props.logClick(e);
    this.setState({
      isJewelFound: true,
    });
  };

  handleCloseDialog = (e) => {
    this.props.logClick(e);
    this.setState({
      isJewelFound: false,
    });
    this.props.getLevelChange();
  };

  handleClick = (e) => {
    this.props.logClick(e);
    this.setState({
      isPrivacyClicked: true,
    });
  };

  render() {
    return (
      <Level
        level={10}
        academicmode={this.props.academicmode}
        getModeSwitch={this.props.getModeSwitch}
        mission="find the privacy settings."
        openHint={this.props.openHint}
        closeHint={this.props.closeHint}
        isHintShown={this.props.isHintShown}
        hintMessage="Click on the button labeled Privacy."
        isJewelFound={this.state.isJewelFound}
        handleCloseDialog={this.handleCloseDialog}
        dialogMessage="Your mission is complete! Sometimes it is easier to search for a setting than clicking around to find it. Click the X to return to the home page and receive your next mission."
      >
        <div>
          {!this.state.isPrivacyClicked && (
            <div className="settings-container">
              <div
                className="settings-grid"
                id="level 10 system icon"
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
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
                onClick={(e) => this.handleClick(e)}
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
                onClick={(e) => this.props.logClick(e)}
              >
                <IconButton>
                  <UpdateIcon fontSize="large" />
                </IconButton>
                <h4 className="item">Updates</h4>
                <p>Windows Update, recovery, backup</p>
              </div>
            </div>
          )}
          {this.state.isPrivacyClicked && (
            <div className="privacy-container">
              <div className="privacy-drawer">
                <div
                  className="privacy-grid"
                  id="level 10 location icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <LocationOnIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Location</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 camera icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <CameraAltIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Camera</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 microphone icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <MicIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Microphone</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 notifications icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <NotificationsIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Notifications</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 contacts icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <RecentActorsIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Contacts</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 calendar icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <CalendarTodayIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Calendar</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 email icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <EmailIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Email</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 tasks icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <AssignmentIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Tasks</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 other devices icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <DevicesOtherIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Other Devices</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 app diagnostics icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <AssessmentIcon fontSize="large" />
                  </IconButton>
                  <p className="item">App Diagnostics</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 cloud icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <CloudIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Cloud</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 documents icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <InsertDriveFileIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Documents</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 pictures icon"
                  onClick={(e) => this.props.logClick(e)}
                >
                  <IconButton>
                    <ImageIcon fontSize="large" />
                  </IconButton>
                  <p className="item">Pictures</p>
                </div>
                <div
                  className="privacy-grid"
                  id="level 10 videos icon"
                  onClick={(e) => this.props.logClick(e)}
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
                  Let apps use advertising ID to make ads more interesting to
                  you based on your app activity
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
                <p>
                  Let the system track app launches to improve search results
                </p>
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
                <Jewel handleFound={this.handleFound} />
              </div>
            </div>
          )}
        </div>
      </Level>
    );
  }
}

export default Level10;
