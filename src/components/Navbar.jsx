import React, {Component} from 'react'
import './Navbar.css'
import {Link} from 'semantic-ui-react'

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
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Nav;