import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <nav id="main_nav">
                <ul className="dropdown">
                    <li>
                        <button className="drop-button">Career</button>
                        <ul className="dropdown">
                            <li><button className="drop-button">Resume</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Writing</button></li>
                                    <li><button className="drop-button">Formatting</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button">Cover Letter</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Writing</button></li>
                                    <li><button className="drop-button">Formatting</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button">Interviews</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Preparing</button></li>
                                    <li><button className="drop-button">Star Method</button></li>
                                    <li><button className="drop-button">Following up</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button">Mentorship</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Finding a mentor</button></li>
                                    <li><button className="drop-button">Being a mentor</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-button">Soft Skills</button>
                        <ul className="dropdown">
                            <li>
                                <button className="drop-button">Problem Solving</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Analysis</button></li>
                                    <li><button className="drop-button">Brainstorming</button></li>
                                </ul>
                            </li>
                            <li>
                                <button className="drop-button">Goals</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Setting Goals</button></li>
                                    <li><button className="drop-button">Making Progress</button></li>
                                    <li><button className="drop-button">Evaluating Goals</button></li>
                                    <li><button className="drop-button">Creating New Goals</button></li>
                                </ul>
                            </li>
                            <li>
                                <button className="drop-button">Time Management</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Evaluating Time</button></li>
                                    <li><button className="drop-button">Staying Focused</button></li>
                                    <li><button className="drop-button">Organizing Your Time</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-button">Technical</button>
                        <ul className="dropdown">
                            <li><button className="drop-button">Software</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Microsoft Office</button>
                                        <ul className="dropdown">
                                            <li><button className="drop-button">Excel</button></li>
                                            <li><button className="drop-button">Word</button></li>
                                            <li><button className="drop-button">Powerpoint</button></li>
                                            <li><button className="drop-button">One Drive</button></li>
                                        </ul>
                                    </li>
                                    <li><button className="drop-button">Google Suite</button>
                                        <ul className="dropdown">
                                            <li><button className="drop-button">Sheets</button></li>
                                            <li><button className="drop-button">Docs</button></li>
                                            <li><button className="drop-button">Slides</button></li>
                                            <li><button className="drop-button" onClick={this.props.handleClick}>Drive</button></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><button className="drop-button">Hardware</button>
                                <ul className="dropdown">
                                    <li><button className="drop-button">Computer</button></li>
                                    <li><button className="drop-button">Router</button></li>
                                    <li><button className="drop-button">Printer</button></li>
                                </ul>
                            </li>
                            <li><button className="drop-button">IT Management</button></li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-button">Leadership</button>
                        <ul className="dropdown">
                            <li><button className="drop-button">Decision</button></li>
                            <li><button className="drop-button">Vision</button></li>
                            <li><button className="drop-button">Culture</button></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;