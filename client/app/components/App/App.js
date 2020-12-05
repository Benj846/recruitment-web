import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';
import Navbar from '../Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
      </div>
    );
  }
}

export default App;
