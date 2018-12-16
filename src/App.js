import React, { Component } from 'react';
import Header from './components/header';
import Bio from './components/bio';
import Projects from './components/projects';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Bio />
      <Projects />
      <Footer />
     </div>
    );
  }
}

export default App;
