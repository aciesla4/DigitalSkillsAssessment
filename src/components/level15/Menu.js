import React from "react";
import "../../css/Menu.css";

// Component for the menu used in Level 15
export default function Menu(props) {
  return (
    <div id="main_nav">
      <ul className="dropdown">
        <li>
          <button
            className="drop-button"
            id="level 14 career button"
            onMouseOver={props.logClick}
          >
            Career
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="level 14 resume button"
                onMouseOver={props.logClick}
              >
                Resume
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 resume writing button"
                    onMouseOver={props.logClick}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 resume formatting button"
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
                id="level 14 cover letter button"
                onMouseOver={props.logClick}
              >
                Cover Letter
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 cover letter writing button"
                    onMouseOver={props.logClick}
                  >
                    Writing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 cover letter formatting button"
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
                id="level 14 interviews button"
                onMouseOver={props.logClick}
              >
                Interviews
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 preparing button"
                    onMouseOver={props.logClick}
                  >
                    Preparing
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 star method button"
                    onMouseOver={props.logClick}
                  >
                    Star Method
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 following up button"
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
                id="level 14 mentorship button"
                onMouseOver={props.logClick}
              >
                Mentorship
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 mentor finding button"
                    onMouseOver={props.logClick}
                  >
                    Finding a mentor
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 being a mentor button"
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
            id="level 14 soft skills button"
            onMouseOver={props.logClick}
          >
            Soft Skills
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="level 14 problem solving button"
                onMouseOver={props.logClick}
              >
                Problem Solving
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 analysis button"
                    onMouseOver={props.logClick}
                  >
                    Analysis
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 brainstorming button"
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
                id="level 14 goals button"
                onMouseOver={props.logClick}
              >
                Goals
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 setting goals button"
                    onMouseOver={props.logClick}
                  >
                    Setting Goals
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 making progress button"
                    onMouseOver={props.logClick}
                  >
                    Making Progress
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 eval goals button"
                    onMouseOver={props.logClick}
                  >
                    Evaluating Goals
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 new goals button"
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
                id="level 14 time management button"
                onMouseOver={props.logClick}
              >
                Organizing
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 eval time button"
                    onMouseOver={props.logClick}
                  >
                    Evaluating Time
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 stay focused button"
                    onMouseOver={props.logClick}
                  >
                    Staying Focused
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 organizing time button"
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
            id="level 14 technical button"
            onMouseOver={props.logClick}
          >
            Technical
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="level 14 software button"
                onMouseOver={props.logClick}
              >
                Software
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 microsoft office button"
                    onMouseOver={props.logClick}
                  >
                    Microsoft Office
                  </button>
                  <ul className="dropdown">
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 excel button"
                        onMouseOver={props.logClick}
                      >
                        Excel
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 word button"
                        onMouseOver={props.logClick}
                      >
                        Word
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 powerpoint button"
                        onMouseOver={props.logClick}
                      >
                        Powerpoint
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 one drive button"
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
                    id="level 14 google button"
                    onMouseOver={props.logClick}
                  >
                    Google Suite
                  </button>
                  <ul className="dropdown">
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 sheets button"
                        onMouseOver={props.logClick}
                      >
                        Sheets
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 docs button"
                        onMouseOver={props.logClick}
                      >
                        Docs
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 slides button"
                        onMouseOver={props.logClick}
                      >
                        Slides
                      </button>
                    </li>
                    <li>
                      <button
                        className="drop-button"
                        id="level 14 drive button"
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
                id="level 14 hardware button"
                onMouseOver={props.logClick}
              >
                Hardware
              </button>
              <ul className="dropdown">
                <li>
                  <button
                    className="drop-button"
                    id="level 14 computer button"
                    onMouseOver={props.logClick}
                  >
                    Computer
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 router button"
                    onMouseOver={props.logClick}
                  >
                    Router
                  </button>
                </li>
                <li>
                  <button
                    className="drop-button"
                    id="level 14 printer button"
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
                id="level 14 IT management button"
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
            id="level 14 leadership button"
            onMouseOver={props.logClick}
          >
            Leadership
          </button>
          <ul className="dropdown">
            <li>
              <button
                className="drop-button"
                id="level 14 decision button"
                onMouseOver={props.logClick}
              >
                Decision
              </button>
            </li>
            <li>
              <button
                className="drop-button"
                id="level 14 vision button"
                onMouseOver={props.logClick}
              >
                Vision
              </button>
            </li>
            <li>
              <button
                className="drop-button"
                id="level 14 culture button"
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
