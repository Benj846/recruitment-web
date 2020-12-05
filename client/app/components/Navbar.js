import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTutorial from './add-tutorial.component';
import App from './App/App';
import Resume from './Resume';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand ">
          <Link to={'/'} className="navbar-brand">
            Fapply
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/menu1'} className="nav-link">
                채용공고
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                커리어
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                채용달력
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/resume'} className="nav-link">
                이력서
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/hiring" component={App} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navbar;
