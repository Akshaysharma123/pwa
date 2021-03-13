import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../component/Home';
import User from '../component/User';
import About from '../component/About';
import Header from './Header';


export default function Navbar() {
    return (
        <>
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
        </Switch>
    </Router>
        </>
    )
}
