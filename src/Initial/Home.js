import React from 'react';
import NavBar from '../Initial/NavBar';
import Messages from '../Initial/Messages';
import LearningMode from "./LearningMode";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPhoneClicked: false,
            learningMode: true,
            messages : [
                {
                    text: "Welcome Agent. You are now a part of an elite academy of spies dedicated to understanding computers. " +
                        "You will be tasked with different missions to find jewels. Collecting jewels will advance you through the " +
                        "ranks to becoming a top agent. ",
                    member: {
                        color: "black",
                        username: "Mission Control"
                    }
                },
                {
                    text: "Your mission is to find the jewel on the next page by closing the pop up. " +
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

    getPhoneClick = () => {
        this.setState({
            isPhoneClicked: true
        })
    }

    getModeSwitch = () => {
        let oldValue = this.state.learningMode
        this.setState({
            learningMode: !oldValue
        })
    }

    render() {
        return (
            <div>
                {this.state.isPhoneClicked &&
                    <Messages messages={this.state.messages} currentMember={this.state.member}/>
                }
                {this.state.learningMode &&
                    <LearningMode learningMode={this.state.learningMode}/>
                }
                <NavBar getPhoneClick={this.getPhoneClick} clicked={this.state.isPhoneClicked} learningMode={this.state.learningMode} getModeSwitch={this.getModeSwitch}/>
            </div>
        );
    }
}

export default Home;