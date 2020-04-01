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
            academicMode: true,
            level: 1
        }
    }

    getLevelChange = () => {
        this.setState( {
            level: this.state.level + 1
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={(props) => <Home {...props} level={this.state.level} />} />
                    <Route path="/level1" render={(props) => <Level1 {...props} level={this.state.level} getLevelChange={this.getLevelChange} />} />
                    <Route path="/level2" render={(props) => <Level2 {...props} level={this.state.level} getLevelChange={this.getLevelChange} />} />
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