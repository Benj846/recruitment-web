import React, { Component } from 'react';
import '../../styles/vendor/normalize.css';
import '../../styles/App.css';
import Navbar from '../resume/Navbar';

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
