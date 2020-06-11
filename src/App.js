import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropsRoute from './util/PropsRoute';
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

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 1,
            academicmode: false,
            isHintShown: false,
            items: []
        }
    }

    getModeSwitch = () => {
        let oldValue = this.state.academicmode
        this.setState({
            academicmode: !oldValue
        })
    }

    getLevelChange = () => {
        this.setState( {
            level: this.state.level + 1
        })
    }

    openHint = () => {
        this.setState({
            isHintShown: true
        })
    }

    closeHint = () => {
        this.setState({
            isHintShown: false
        })
    }

    getItems = (items) => {
        console.log(items)
        this.setState({
            items: items
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PropsRoute path="/home" component={Home} level={this.state.level} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} />
                    <Route path="/level1" render={(props) => <Level1 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level2" render={(props) => <Level2 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} />} />
                    <Route path="/level3" render={(props) => <Level3 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level4" render={(props) => <Level4 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level5" render={(props) => <Level5 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level6" render={(props) => <Level6 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level7" render={(props) => <Level7 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} getItems={this.getItems}/>} />
                    <Route path="/level8" render={(props) => <Level8 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} items={this.state.items}/>} />
                    <Route path="/level9" render={(props) => <Level9 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level10" render={(props) => <Level10 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level11" render={(props) => <Level11 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level12" render={(props) => <Level12 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level13" render={(props) => <Level13 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/level14" render={(props) => <Level14 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <PropsRoute path="/level15" component={Level15} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />
                    <Route path="/level16" render={(props) => <Level16 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
                    <Route path="/" component={Welcome} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

export default App;

/*
                    <Route path="/home" render={(props) => <Home {...props} level={this.state.level} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} />} />
                    <Route path="/level15" render={(props) => <Level15 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} isHintShown={this.state.isHintShown} closeHint={this.closeHint} />} />
 */