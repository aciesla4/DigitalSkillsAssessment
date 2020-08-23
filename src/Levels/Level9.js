import React from 'react';
import '../App.css';
import Jewel from '../util/Jewel';
import Level from '../util/Level';
import ShareModal from '../util/ShareModal';
import '../css/Level9.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import SpyLogo from "../Initial/spyLogo.jpg";

class Level9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
            isDialogOpen: false,
            isJewelShown: false,
        }
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
            isJewelFound: false
        });
        this.props.getLevelChange();
    };

    openFacebookDialog = (e) => {
        this.props.logClick(e);
        this.setState({
            isDialogOpen: true
        });
    };

    closeFacebookDialog = (e) => {
        this.props.logClick(e); 
        this.setState({
            isDialogOpen: false,
            isJewelShown: true
        });
    };

    render() {
        return (
            <Level
                level={9}
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='share your certificate on Facebook.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='The facebook icon is the leftmost icon. Click it, then click post at the bottom of the dialog that pops up.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Most websites allow you to post pages to social media. Often you will need to login before continuing. Click the X to return to the home page and receive your next mission.'
            >
                <div>
                    <div className="certificate">
                        <img className="cert-logo" src={SpyLogo} alt="logo"/><br/>
                        <h1>CONGRATULATIONS AGENT</h1>
                        <h3>This certifies that the agent has completed the following training:</h3>
                        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                            <li>Closing a pop up</li>
                            <li>Finding an image</li>
                            <li>Favoriting an item</li>
                            <li>Resizing a box</li>
                            <li>Filtering a table</li>
                            <li>Purchasing an item</li>
                        </ul>
                        <h2 style={{ fontFamily: 'garamond', fontStyle: 'italic' }}>Spy Academy</h2>
                    </div>
                    <div className="share">
                        <IconButton id="level 9 facebook icon" onClick={(e) => this.openFacebookDialog(e)}><FacebookIcon fontSize="large"/></IconButton>
                        <IconButton id="level 9 twitter icon" onClick={(e) => this.props.logClick(e)}><TwitterIcon fontSize="large"/></IconButton>
                        <IconButton id="level 9 instagram icon" onClick={(e) => this.props.logClick(e)}><InstagramIcon fontSize="large"/></IconButton>
                        <IconButton id="level 9 email icon" onClick={(e) => this.props.logClick(e)}><EmailIcon fontSize="large"/></IconButton>
                        {this.state.isJewelShown && <Jewel handleFound={this.handleFound}/>}
                    </div>
                    <ShareModal show={this.state.isDialogOpen} onClick={(e) => this.closeFacebookDialog(e)}/>
                </div>
            </Level>
        );
    }
}

export default Level9;