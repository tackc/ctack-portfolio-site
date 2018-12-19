import React, {Component} from 'react';
import './Navbar.css'

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
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact</a>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Nav;