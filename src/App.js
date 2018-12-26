import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        <Nav className="AppNav flex-item" />
        <div className="PageContent">
          <Home id="#home" className="AppHome flex-item" />
          <About id="#about" className="AppAbout flex-item" />
          <Portfolio id="#portfolio" className="AppPortfolio flex-item" />
          <Contact id="#contact" className="AppContact flex-item" />
        </div>
        
        {/* <Router>
          <Switch>
              <Route path="/about" render={() => <About/>} />
              <Route path="/contact" render={() => <Contact/>} />
              <Route path="/portfolio" render={() => <Portfolio/>} />
              <Route exact={true} path="/" render={() => <Home/>} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
