import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Initial/Welcome';
import Home from './Initial/Home';
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 1,
            academicmode: true,
            hint: false
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
        console.log("getting hint")
        this.setState({
            hint: true
        })
    }

    closeHint = () => {
        console.log("closing hint")
        this.setState({
            hint: false
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={(props) => <Home {...props} level={this.state.level} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} />} />
                    <Route path="/level1" render={(props) => <Level1 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} getModeSwitch={this.getModeSwitch} openHint={this.openHint} hint={this.state.hint} closeHint={this.closeHint}/>} />
                    <Route path="/level2" render={(props) => <Level2 {...props} level={this.state.level} getLevelChange={this.getLevelChange} academicmode={this.state.academicmode} />} />
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