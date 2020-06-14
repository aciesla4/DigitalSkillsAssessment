import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div id="main_nav">
                <ul className="dropdown">
                    <li>
                        <button className="drop-button" id="level 14 career button" onMouseOver={this.props.logClick}>Career</button>
                        <ul className="dropdown">
                            <li><button className="drop-button" id="level 14 resume button" onMouseOver={this.props.logClick}>Resume</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 resume writing button" onMouseOver={this.props.logClick}>Writing</button></li>
                                    <li><button className="drop-button" id="level 14 resume formatting button" onMouseOver={this.props.logClick}>Formatting</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button" id="level 14 cover letter button" onMouseOver={this.props.logClick}>Cover Letter</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 cover letter writing button" onMouseOver={this.props.logClick}>Writing</button></li>
                                    <li><button className="drop-button" id="level 14 cover letter formatting button" onMouseOver={this.props.logClick}>Formatting</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button" id="level 14 interviews button" onMouseOver={this.props.logClick}>Interviews</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 preparing button" onMouseOver={this.props.logClick}>Preparing</button></li>
                                    <li><button className="drop-button" id="level 14 star method button" onMouseOver={this.props.logClick}>Star Method</button></li>
                                    <li><button className="drop-button" id="level 14 following up button" onMouseOver={this.props.logClick}>Following up</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button" id="level 14 mentorship button" onMouseOver={this.props.logClick}>Mentorship</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 mentor finding button" onMouseOver={this.props.logClick}>Finding a mentor</button></li>
                                    <li><button className="drop-button" id="level 14 being a mentor button" onMouseOver={this.props.logClick}>Being a mentor</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-button" id="level 14 soft skills button" onMouseOver={this.props.logClick}>Soft Skills</button>
                        <ul className="dropdown">
                            <li>
                                <button className="drop-button" id="level 14 problem solving button" onMouseOver={this.props.logClick}>Problem Solving</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 analysis button" onMouseOver={this.props.logClick}>Analysis</button></li>
                                    <li><button className="drop-button" id="level 14 brainstorming button" onMouseOver={this.props.logClick}>Brainstorming</button></li>
                                </ul>
                            </li>
                            <li>
                                <button className="drop-button" id="level 14 goals button" onMouseOver={this.props.logClick}>Goals</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 setting goals button" onMouseOver={this.props.logClick}>Setting Goals</button></li>
                                    <li><button className="drop-button" id="level 14 making progress button" onMouseOver={this.props.logClick}>Making Progress</button></li>
                                    <li><button className="drop-button" id="level 14 eval goals button" onMouseOver={this.props.logClick}>Evaluating Goals</button></li>
                                    <li><button className="drop-button" id="level 14 new goals button" onMouseOver={this.props.logClick}>Creating New Goals</button></li>
                                </ul>
                            </li>
                            <li>
                                <button className="drop-button" id="level 14 time management button" onMouseOver={this.props.logClick}>Time Management</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 eval time button" onMouseOver={this.props.logClick}>Evaluating Time</button></li>
                                    <li><button className="drop-button" id="level 14 stay focused button" onMouseOver={this.props.logClick}>Staying Focused</button></li>
                                    <li><button className="drop-button" id="level 14 organizing time button" onMouseOver={this.props.logClick}>Organizing Your Time</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-button" id="level 14 technical button" onMouseOver={this.props.logClick}>Technical</button>
                        <ul className="dropdown">
                            <li><button className="drop-button" id="level 14 software button" onMouseOver={this.props.logClick}>Software</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 microsoft office button" onMouseOver={this.props.logClick}>Microsoft Office</button>
                                        <ul className="dropdown">
                                            <li><button className="drop-button" id="level 14 excel button" onMouseOver={this.props.logClick}>Excel</button></li>
                                            <li><button className="drop-button" id="level 14 word button" onMouseOver={this.props.logClick}>Word</button></li>
                                            <li><button className="drop-button" id="level 14 powerpoint button" onMouseOver={this.props.logClick}>Powerpoint</button></li>
                                            <li><button className="drop-button" id="level 14 one drive button" onMouseOver={this.props.logClick}>One Drive</button></li>
                                        </ul>
                                    </li>
                                    <li><button className="drop-button" id="level 14 google button" onMouseOver={this.props.logClick}>Google Suite</button>
                                        <ul className="dropdown">
                                            <li><button className="drop-button" id="level 14 sheets button" onMouseOver={this.props.logClick}>Sheets</button></li>
                                            <li><button className="drop-button" id="level 14 docs button" onMouseOver={this.props.logClick}>Docs</button></li>
                                            <li><button className="drop-button" id="level 14 slides button" onMouseOver={this.props.logClick}>Slides</button></li>
                                            <li><button className="drop-button" id="level 14 drive button" onClick={this.props.handleClick}>Drive</button></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><button className="drop-button" id="level 14 hardware button" onMouseOver={this.props.logClick}>Hardware</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button" id="level 14 computer button" onMouseOver={this.props.logClick}>Computer</button></li>
                                    <li><button className="drop-button" id="level 14 router button" onMouseOver={this.props.logClick}>Router</button></li>
                                    <li><button className="drop-button" id="level 14 printer button" onMouseOver={this.props.logClick}>Printer</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button" id="level 14 IT management button" onMouseOver={this.props.logClick}>IT Management</button></li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-button" id="level 14 leadership button" onMouseOver={this.props.logClick}>Leadership</button>
                        <ul className="dropdown">
                            <li><button className="drop-button" id="level 14 decision button" onMouseOver={this.props.logClick}>Decision</button></li>
                            <li><button className="drop-button" id="level 14 vision button" onMouseOver={this.props.logClick}>Vision</button></li>
                            <li><button className="drop-button" id="level 14 culture button" onMouseOver={this.props.logClick}>Culture</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;