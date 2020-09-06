import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
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

export default function App() {
  function logClick(e) {
    console.log(e.currentTarget.id);
    const dt = new Date();
    axios({
      method: "post",
      url: "https://digital-skills-server.herokuapp.com/logging",
      data: {
        id: e.currentTarget.id,
        time: dt / 1000,
      },
    });
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/level1"
          render={(props) => <Level1 {...props} logClick={logClick} />}
        />
        <Route
          path="/level2"
          render={(props) => <Level2 {...props} logClick={logClick} />}
        />
        <Route
          path="/level3"
          render={(props) => <Level3 {...props} logClick={logClick} />}
        />
        <Route
          path="/level4"
          render={(props) => <Level4 {...props} logClick={logClick} />}
        />
        <Route
          path="/level5"
          render={(props) => <Level5 {...props} logClick={logClick} />}
        />
        <Route
          path="/level6"
          render={(props) => <Level6 {...props} logClick={logClick} />}
        />
        <Route
          path="/level7"
          render={(props) => <Level7 {...props} logClick={logClick} />}
        />
        <Route
          path="/level8"
          render={(props) => <Level8 {...props} logClick={logClick} />}
        />
        <Route
          path="/level9"
          render={(props) => <Level9 {...props} logClick={logClick} />}
        />
        <Route
          path="/level10"
          render={(props) => <Level10 {...props} logClick={logClick} />}
        />
        <Route
          path="/level11"
          render={(props) => <Level11 {...props} logClick={logClick} />}
        />
        <Route
          path="/level12"
          render={(props) => <Level12 {...props} logClick={logClick} />}
        />
        <Route
          path="/level13"
          render={(props) => <Level13 {...props} logClick={logClick} />}
        />
        <Route
          path="/level14"
          render={(props) => <Level14 {...props} logClick={logClick} />}
        />
        <Route
          path="/level15"
          render={(props) => <Level15 {...props} logClick={logClick} />}
        />
        <Route
          path="/level16"
          render={(props) => <Level16 {...props} logClick={logClick} />}
        />
        <Route path="/congrats" component={Final} />
        <Route path="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}
