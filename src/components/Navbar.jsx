import React, {Component} from 'react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <div className="NavbarPane flex-container">
                <nav className="NavContainer flex-item">
                    <div className="Brand">
                        <h3>Chris Tack</h3>
                        <h6>Full Stack Developer</h6>
                    </div>
                    <div className="NavLinks">
                        <Router>
                            <Switch>
                                <Link to="home" href="/">Home</Link>
                                <Link to="#about" href="/about">About</Link>
                                <Link to="#portfolio" href="/portfolio">Portfolio</Link>
                                <Link to="#contact" href="/contact">Contact</Link>
                            </Switch>
                        </Router>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Nav;