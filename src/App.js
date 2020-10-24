import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2";
import Level3 from "./Levels/Level3";
import Level4 from "./Levels/Level4";
import Level5 from "./Levels/Level5";
import Level6 from "./Levels/Level6";
import Level7 from "./Levels/Level7";
import Level8 from "./Levels/Level8";
import Level9 from "./Levels/Level9";
import Level10 from "./Levels/Level10";
import Level11 from "./Levels/Level11";
import Level12 from "./Levels/Level12";
import Level13 from "./Levels/Level13";
import Level14 from "./Levels/Level14";
import Level15 from "./Levels/Level15";
import Level16 from "./Levels/Level16";
import Level17 from "./Levels/Level17";
import Final from "./components/final/Final";
import axios from "axios";

// Component for the web app that handles logging and switching between pages
class App extends React.Component {
  // handles logging each click and their time to the API
  logClick = (e, level)=> {
    console.log(e.currentTarget.id);
    const dt = new Date();
    // makes an HTTP request to the logging server
    //url: "https://digital-skills-server.herokuapp.com/logging",
    axios({
      method: "post",
      url: "http://localhost:8080/logging",
      data: {
        level: level,
        id: e.currentTarget.id,
        time: dt / 1000,
      },
    });
  }

  componentDidMount() {
    console.log("DELETING LOGS");
    axios({
      method: 'delete',
      url: 'http://localhost:8080/logging'
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
              path="/level1"
              render={(props) => <Level1 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level2"
              render={(props) => <Level2 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level3"
              render={(props) => <Level3 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level4"
              render={(props) => <Level4 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level5"
              render={(props) => <Level5 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level6"
              render={(props) => <Level6 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level7"
              render={(props) => <Level7 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level8"
              render={(props) => <Level8 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level9"
              render={(props) => <Level9 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level10"
              render={(props) => <Level10 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level11"
              render={(props) => <Level11 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level12"
              render={(props) => <Level12 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level13"
              render={(props) => <Level13 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level14"
              render={(props) => <Level14 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level15"
              render={(props) => <Level15 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level16"
              render={(props) => <Level16 {...props} logClick={this.logClick}/>}
          />
          <Route
              path="/level17"
              render={(props) => <Level17 {...props} logClick={this.logClick}/>}
          />
          <Route path="/congrats" component={Final}/>
          <Route path="/" component={Welcome}/>
        </Switch>
      </BrowserRouter>
    )}
}

export default App;
