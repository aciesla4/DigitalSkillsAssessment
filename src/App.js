import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Home from "./components/welcome/Home";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import Level4 from "./levels/Level4";
import Level5 from "./levels/Level5";
import Level6 from "./levels/Level6";
import Level7 from "./levels/Level7";
import Level8 from "./levels/Level8";
import Level9 from "./levels/Level9";
import Level10 from "./levels/Level10";
import Level11 from "./levels/Level11";
import Level12 from "./levels/Level12";
import Level13 from "./levels/Level13";
import Level14 from "./levels/Level14";
import Level15 from "./levels/Level15";
import Level16 from "./levels/Level16";
import Final from "./components/final/Final";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  logClick = (e) => {
    console.log(e.currentTarget.id);
    const dt = new Date();
    axios({
      method: "post",
      url: "https://digital-skills-server.herokuapp.com/logging",
      data: {
        id: e.currentTarget.id,
        time: (dt - this.state.start) / 1000,
      },
    });
  };

  getLevelChange = () => {
    if (this.state.level === 16) {
      window.location.href = "/congrats";
    } else {
      this.setState({
        level: this.state.level + 1,
      });
    }
  };

  getItems = (items) => {
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => <Home {...props} logClick={this.logClick} />}
          />
          <Route
            path="/level1"
            render={(props) => (
              <Level1
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level2"
            render={(props) => (
              <Level2
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level3"
            render={(props) => (
              <Level3
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level4"
            render={(props) => (
              <Level4
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level5"
            render={(props) => (
              <Level5
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level6"
            render={(props) => (
              <Level6
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level7"
            render={(props) => (
              <Level7
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
                getItems={this.getItems}
              />
            )}
          />
          <Route
            path="/level8"
            render={(props) => (
              <Level8
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
                items={this.state.items}
              />
            )}
          />
          <Route
            path="/level9"
            render={(props) => (
              <Level9
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level10"
            render={(props) => (
              <Level10
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level11"
            render={(props) => (
              <Level11
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level12"
            render={(props) => (
              <Level12
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level13"
            render={(props) => (
              <Level13
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level14"
            render={(props) => (
              <Level14
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level15"
            render={(props) => (
              <Level15
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route
            path="/level16"
            render={(props) => (
              <Level16
                {...props}
                logClick={this.logClick}
                getLevelChange={this.getLevelChange}
              />
            )}
          />
          <Route path="/congrats" component={Final} />
          <Route path="/" component={Welcome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
