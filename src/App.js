import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import OtherApp from './OtherApp'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './components/Navbar';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      // <div>
      //   <OtherApp />
      // </div>
      <div className="App flex-container">
        <Nav className="AppNav flex-item" />
        <div className="PageContent">
          <Home className="AppHome flex-item" />
          <About className="AppAbout flex-item" />
          <Portfolio className="AppPortfolio flex-item" />
          <Contact className="AppContact flex-item" />
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
