import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AddTutorial from "../add-tutorial.component";
import Tutorial from "../tutorial.component";
import TutorialsList from "../tutorials-list.component";
import "./Navbar.css"
class Navbar extends Component {
  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            Fapply
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <ul className="submenu">
                <li>submenu1
                  <Link to={"/tutorials"} className="nav-link">
                    Menu1
                  </Link>  
                </li>
                <li>submenu2</li>
                <li>submenu3</li>
              </ul>
              <Link to={"/tutorials"} className="nav-link">
                Menu1
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Menu2
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Menu3
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/tutorials" component={TutorialsList} /> 
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/menu3" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>


      </div>
    );
  }
}

export default Navbar;
