import React from "react";
import "../../css/Menu.css";
import PropTypes from "prop-types";

// Component for the menu used in Level 15
export default function Menu(props) {
  return (
    <div id="main_nav">
      <ul className="dropdown">
        <li>
          <button
            className="drop-button"
            id="Navigated to the Career menu."
            onMouseOver={props.logClick}
          >
            Career
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Resume menu."
                onMouseOver={props.logClick}
              >
                Resume
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Writing page."
                    onMouseOver={props.logClick}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Formatting page."
                    onMouseOver={props.logClick}
                  >
                    Formatting
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Cover Letter menu."
                onMouseOver={props.logClick}
              >
                Cover Letter
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Writing page."
                    onMouseOver={props.logClick}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Formatting page."
                    onMouseOver={props.logClick}
                  >
                    Formatting
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Interviews menu."
                onMouseOver={props.logClick}
              >
                Interviews
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Preparing page."
                    onMouseOver={props.logClick}
                  >
                    Preparing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Star Method page."
                    onMouseOver={props.logClick}
                  >
                    Star Method
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Following Up page."
                    onMouseOver={props.logClick}
                  >
                    Following up
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Mentorship menu."
                onMouseOver={props.logClick}
              >
                Mentorship
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Mentor Finding page."
                    onMouseOver={props.logClick}
                  >
                    Finding a mentor
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Being a Mentor page."
                    onMouseOver={props.logClick}
                  >
                    Being a mentor
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <button
            className="drop-button"
            id="Navigated to the Soft Skills menu."
            onMouseOver={props.logClick}
          >
            Soft Skills
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Problem Solving menu."
                onMouseOver={props.logClick}
              >
                Problem Solving
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Analysis page."
                    onMouseOver={props.logClick}
                  >
                    Analysis
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Brainstorming page."
                    onMouseOver={props.logClick}
                  >
                    Brainstorming
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Goals menu."
                onMouseOver={props.logClick}
              >
                Goals
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Setting Goals page."
                    onMouseOver={props.logClick}
                  >
                    Setting Goals
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Making Progress page."
                    onMouseOver={props.logClick}
                  >
                    Making Progress
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Evaluating Goals page."
                    onMouseOver={props.logClick}
                  >
                    Evaluating Goals
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Creating New Goals menu."
                    onMouseOver={props.logClick}
                  >
                    Creating New Goals
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Organizing menu."
                onMouseOver={props.logClick}
              >
                Organizing
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Evaluating Time page."
                    onMouseOver={props.logClick}
                  >
                    Evaluating Time
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Staying Focused page."
                    onMouseOver={props.logClick}
                  >
                    Staying Focused
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Organizing Your Time menu."
                    onMouseOver={props.logClick}
                  >
                    Organizing Your Time
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <button
            className="drop-button"
            id="Navigated to the Technical menu."
            onMouseOver={props.logClick}
          >
            Technical
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Software menu."
                onMouseOver={props.logClick}
              >
                Software
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Microsoft Office menu."
                    onMouseOver={props.logClick}
                  >
                    Microsoft Office
                  </button>
                  <ul className="dropdown">
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Excel page."
                        onMouseOver={props.logClick}
                      >
                        Excel
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Word page."
                        onMouseOver={props.logClick}
                      >
                        Word
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Powerpoint page."
                        onMouseOver={props.logClick}
                      >
                        Powerpoint
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the One Drive menu."
                        onMouseOver={props.logClick}
                      >
                        One Drive
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Google Suite menu."
                    onMouseOver={props.logClick}
                  >
                    Google Suite
                  </button>
                  <ul className="dropdown">
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Sheets page."
                        onMouseOver={props.logClick}
                      >
                        Sheets
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Docs page."
                        onMouseOver={props.logClick}
                      >
                        Docs
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Slides page."
                        onMouseOver={props.logClick}
                      >
                        Slides
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Drive page."
                        onClick={props.handleClick}
                      >
                        Drive
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Hardware menu."
                onMouseOver={props.logClick}
              >
                Hardware
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Computer page."
                    onMouseOver={props.logClick}
                  >
                    Computer
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Router page."
                    onMouseOver={props.logClick}
                  >
                    Router
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Printer page."
                    onMouseOver={props.logClick}
                  >
                    Printer
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the IT Management page."
                onMouseOver={props.logClick}
              >
                IT Managing
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button
            className="drop-button"
            id="Navigated to the Leadership menu."
            onMouseOver={props.logClick}
          >
            Leadership
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Decision page."
                onMouseOver={props.logClick}
              >
                Decision
              </button>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Vision page."
                onMouseOver={props.logClick}
              >
                Vision
              </button>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Culture page."
                onMouseOver={props.logClick}
              >
                Culture
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's click
}
