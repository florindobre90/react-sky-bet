import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.scss';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Navbar />, document.getElementById('nav-menu'));
ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </App>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();