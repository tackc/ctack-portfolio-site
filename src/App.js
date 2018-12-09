import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';
import Nav from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default App;
