import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App flex-container">
        <Helmet>
          <title>Chris Tack - Full Stack Developer</title>
          <meta name="description" content="Chris Tack is a Front-End leaning Full Stack Developer in the Greater Seattle Area." />
          <meta name="keywords" content="Node.js, Javascript, React.js, HTML5, CSS3, Express, Express, Git, GitHub, AWS, Amazon Web Services, REST, API, JSON, Adobe Creative Cloud, Photoshop, Illustrator" />
        </Helmet>
        <Nav className="AppNav flex-item" />
        <div className="PageContent">
          <Home id="#home" className="AppHome flex-item" />
          <About id="#about" className="AppAbout flex-item" />
          <Portfolio id="#portfolio" className="AppPortfolio flex-item" />
          <Contact id="#contact" className="AppContact flex-item" />
        </div>
      </div>
    );
  }
}

export default App;
