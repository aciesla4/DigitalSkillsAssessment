import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Initial/Welcome';
import Home from './Initial/Home';
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Level4 from './Levels/Level4';
import Level5 from './Levels/Level5';
import Level6 from './Levels/Level6';
import Level7 from './Levels/Level7';
import Level8 from './Levels/Level8';
import Level9 from './Levels/Level9';
import Level10 from './Levels/Level10';
import Level11 from './Levels/Level11';
import Level12 from './Levels/Level12';
import Level13 from './Levels/Level13';
import Level14 from './Levels/Level14';
import Level15 from './Levels/Level15';
import Level16 from './Levels/Level16';
import Final from './Initial/Final';
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 1,
            academicmode: true,
            isHintShown: false,
            items: []
        }
    }

    logClick = (e) => {
        console.log(e.currentTarget.id);
        const dt = new Date();
        axios({
            method: 'post',
            url: 'http://localhost:8080/logging',
            data: {
                id: e.currentTarget.id,
                time: (dt - this.state.start) / 1000
            }
        })
    };

    getModeSwitch = (e) => {
        this.logClick(e);
        let oldValue = this.state.academicmode;
        this.setState({
            academicmode: !oldValue
        });
    };

    getLevelChange = () => {
        if (this.state.level === 16) {
            window.location.href='/congrats'
        }
        else {
            this.setState({
                level: this.state.level + 1
            });
        }
    };

    openHint = (e) => {
        this.logClick(e);
        this.setState({
            isHintShown: true
        });
    };

    closeHint = (e) => {
        this.logClick(e);
        this.setState({
            isHintShown: false
        });
    };

    getItems = (items) => {
        this.setState({
            items: items
        });
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" render={(props) => <Home {...props} logClick={this.logClick} level={this.state.level} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} />} />
                    <Route path="/level1" render={(props) => <Level1 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level2" render={(props) => <Level2 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} />} />
                    <Route path="/level3" render={(props) => <Level3 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level4" render={(props) => <Level4 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level5" render={(props) => <Level5 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level6" render={(props) => <Level6 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level7" render={(props) => <Level7 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} getItems={this.getItems}/>} />
                    <Route path="/level8" render={(props) => <Level8 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} items={this.state.items}/>} />
                    <Route path="/level9" render={(props) => <Level9 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level10" render={(props) => <Level10 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level11" render={(props) => <Level11 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level12" render={(props) => <Level12 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level13" render={(props) => <Level13 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level14" render={(props) => <Level14 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level15" render={(props) => <Level15 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level16" render={(props) => <Level16 {...props} logClick={this.logClick} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/congrats" component={Final} />
                    <Route path="/" component={Welcome} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;