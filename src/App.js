import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {

  render() {
    return (
      <div>
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
