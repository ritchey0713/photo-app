import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  as Router, Route } from 'react-router-dom'

import Home from './containers/Home.js'
import Contact from './components/static/Contact.js'
import About from './components/static/About.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
