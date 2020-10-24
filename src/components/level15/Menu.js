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
            onMouseOver={(e) => props.logClick(e, 15)}
          >
            Career
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Resume menu."
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Resume
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Writing page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Formatting page."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Cover Letter
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Writing page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Formatting page."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Interviews
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Preparing page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Preparing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Star Method page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Star Method
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Following Up page."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Mentorship
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Mentor Finding page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Finding a mentor
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Being a Mentor page."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
            onMouseOver={(e) => props.logClick(e, 15)}
          >
            Soft Skills
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Problem Solving menu."
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Problem Solving
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Analysis page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Analysis
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Brainstorming page."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Goals
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Setting Goals page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Setting Goals
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Making Progress page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Making Progress
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Evaluating Goals page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Evaluating Goals
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Creating New Goals menu."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Organizing
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Evaluating Time page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Evaluating Time
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Staying Focused page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Staying Focused
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Organizing Your Time menu."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
            onMouseOver={(e) => props.logClick(e, 15)}
          >
            Technical
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Software menu."
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Software
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Microsoft Office menu."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Microsoft Office
                  </button>
                  <ul className="dropdown">
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Excel page."
                        onMouseOver={(e) => props.logClick(e, 15)}
                      >
                        Excel
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Word page."
                        onMouseOver={(e) => props.logClick(e, 15)}
                      >
                        Word
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Powerpoint page."
                        onMouseOver={(e) => props.logClick(e, 15)}
                      >
                        Powerpoint
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the One Drive menu."
                        onMouseOver={(e) => props.logClick(e, 15)}
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
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Google Suite
                  </button>
                  <ul className="dropdown">
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Sheets page."
                        onMouseOver={(e) => props.logClick(e, 15)}
                      >
                        Sheets
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Docs page."
                        onMouseOver={(e) => props.logClick(e, 15)}
                      >
                        Docs
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="Navigated to the Slides page."
                        onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Hardware
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Computer page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Computer
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Router page."
                    onMouseOver={(e) => props.logClick(e, 15)}
                  >
                    Router
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="Navigated to the Printer page."
                    onMouseOver={(e) => props.logClick(e, 15)}
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
                onMouseOver={(e) => props.logClick(e, 15)}
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
            onMouseOver={(e) => props.logClick(e, 15)}
          >
            Leadership
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="Navigated to the Decision page."
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Decision
              </button>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Vision page."
                onMouseOver={(e) => props.logClick(e, 15)}
              >
                Vision
              </button>
            </li>
            <li>
              <button
                className="drop-button"
                id="Navigated to the Culture page."
                onMouseOver={(e) => props.logClick(e, 15)}
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
