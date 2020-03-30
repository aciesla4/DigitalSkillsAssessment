import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Initial/Welcome';
import Home from './Initial/Home';
import Level1 from './Levels/Level1';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            academicMode: true
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Welcome} exact />
                    <Route path="/Home" component={Home} />
                    <Route path="/Page" component={Level1} />
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