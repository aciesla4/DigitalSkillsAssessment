import React from 'react';
import NavBar from '../util/NavBar';
import Messages from '../util/Messages';
import LearningMode from '../util/LearningMode';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPhoneClicked: false,
            academicmode: this.props.academicmode,
            messages : [
                {
                    level: 1,
                    text: "Welcome Agent. You are now a part of an elite academy of spies dedicated to understanding computers. " +
                        "You will be tasked with different missions to find jewels. Collecting jewels will advance you through the " +
                        "ranks to becoming a top agent. ",
                    member: {
                        color: "black",
                        username: "Mission Control"
                    }
                },
                {
                    level: 1,
                    text: "Your mission is to find the jewel on the next page by scrolling down. " +
                        "Click the check mark to begin. ",
                    member: {
                        color: "black",
                        username: "Mission Control"
                    }
                },
                {
                    level: 2,
                    text: "Congratulations on completing your first mission agent. You are on your way to becoming an elite spy.",
                    member: {
                        color: "black",
                        username: "Mission Control"
                    }
                },
                {
                    level: 2,
                    text: "Your next mission is to find the jewel on the next page by closing the pop up. " +
                        "Click the check mark to begin. ",
                    member: {
                        color: "black",
                        username: "Mission Control"
                    }
                }
            ],
            member: {
                username: 'spy',
                color: 'blue'
            }
        };
    }

    getModeSwitch = () => {
        let oldValue = this.state.academicmode
        this.setState({
            academicmode: !oldValue
        })
        this.props.getModeSwitch()
    }

    getPhoneClick = () => {
        this.setState({
            isPhoneClicked: true
        })
    }

    getMessages = () => {
        var i;
        const messages = [];
        for (i = 0; i < this.state.messages.length; i++) {
            if(this.state.messages[i].level === this.props.level) {
                messages.push(this.state.messages[i]);
            }
        }
        return messages;
    }

    render() {
        let messages = this.getMessages();
        return (
            <div>
                {this.state.isPhoneClicked &&
                    <Messages messages={messages} currentMember={this.state.member}/>
                }
                {this.state.academicmode &&
                    <LearningMode academicmode={this.state.academicmode}/>
                }
                <NavBar level={this.props.level} getPhoneClick={this.getPhoneClick} clicked={this.state.isPhoneClicked} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} getLevelChange={this.props.getLevelChange}/>
            </div>
        );
    }
}

export default Home;