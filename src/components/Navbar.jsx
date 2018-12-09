import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Navbar from './Navbar.css'

class Nav extends Component {

    render() {
        return (
            <div className="NavbarPane">
                <nav className="NavContainer">
                    <div className="Brand">
                        <h3>Chris Tack</h3>
                    </div>
                    <div className="NavLinks">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact</a>
                    </div>
                </nav>

                <Router>
                    <Switch>
                        <Route exact={true} path="/" render={() => <Home/>} />
                        <Route path="/about" render={() => <About/>} />
                        <Route path="/contact" render={() => <Contact/>} />
                        <Route path="/portfolio" render={() => <Portfolio/>} />
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default Nav;