import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

import AddTutorial from '../career/Career';
import App from '../App/App';
import Resume from './Resume';
import '../../styles/Navbar';
import Recruitment from '../recruitment/RecruitmentComponent';
import Career from '../career/Career';
import Calendar from '../calendar/Calendar';

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
              <Link to={'/recruitment'} className="nav-link">
                채용공고
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/career'} className="nav-link">
                커리어
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/calendar'} className="nav-link">
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

        {/* <div className="container mt-3"> */}
        {/* <div className="resume-container">
          <div className="resume-content"> */}
            <Switch>
            <Route exact path="/" component={Recruitment} />
              <Route exact path="/recruitment" />
              <Route exact path="/career" component={Career} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Navbar;
