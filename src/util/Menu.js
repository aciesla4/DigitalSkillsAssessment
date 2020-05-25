import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <nav id="main_nav">
                <ul>
                    <li>
                        <button>Career</button>
                        <ul>
                            <li><button>Resume</button>
                                <ul>
                                    <li><button>Writing</button></li>
                                    <li><button>Formatting</button></li>
                                </ul>
                            </li>
                            <li><button>Cover Letter</button>
                                <ul>
                                    <li><button>Writing</button></li>
                                    <li><button>Formatting</button></li>
                                </ul>
                            </li>
                            <li><button>Interviews</button>
                                <ul>
                                    <li><button>Preparing</button></li>
                                    <li><button>Star Method</button></li>
                                    <li><button>Following up</button></li>
                                </ul>
                            </li>
                            <li><button>Mentorship</button>
                                <ul>
                                    <li><button>Finding a mentor</button></li>
                                    <li><button>Being a mentor</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>Soft Skills</button>
                        <ul>
                            <li>
                                <button>Problem Solving</button>
                                <ul>
                                    <li><button>Analysis</button></li>
                                    <li><button>Brainstorming</button></li>
                                </ul>
                            </li>
                            <li>
                                <button>Goals</button>
                                <ul>
                                    <li><button>Setting Goals</button></li>
                                    <li><button>Making Progress</button></li>
                                    <li><button>Evaluating Goals</button></li>
                                    <li><button>Creating New Goals</button></li>
                                </ul>
                            </li>
                            <li>
                                <button>Time Management</button>
                                <ul>
                                    <li><button>Evaluating Time</button></li>
                                    <li><button>Staying Focused</button></li>
                                    <li><button>Organizing Your Time</button></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>Technical</button>
                        <ul>
                            <li><button>Software</button>
                                <ul>
                                    <li><button>Microsoft Office</button>
                                        <ul>
                                            <li><button>Excel</button></li>
                                            <li><button>Word</button></li>
                                            <li><button>Powerpoint</button></li>
                                            <li><button>One Drive</button></li>
                                        </ul>
                                    </li>
                                    <li><button>Google Suite</button>
                                        <ul>
                                            <li><button>Sheets</button></li>
                                            <li><button>Docs</button></li>
                                            <li><button>Slides</button></li>
                                            <li><button onClick={this.props.handleClick}>Drive</button></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><button>Hardware</button>
                                <ul>
                                    <li><button>Computer</button></li>
                                    <li><button>Router</button></li>
                                    <li><button>Printer</button></li>
                                </ul>
                            </li>
                            <li><button>IT Management</button></li>
                        </ul>
                    </li>
                    <li>
                        <button>Leadership</button>
                        <ul>
                            <li><button>Decision</button></li>
                            <li><button>Vision</button></li>
                            <li><button>Culture</button></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;