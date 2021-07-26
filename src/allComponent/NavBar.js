import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: 'sticky', top: 0, zIndex: 1}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-3">
              <NavLink to="/menu">SẢN PHẨM</NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink to="/allmenu">TẤT CẢ SẢN PHẨM</NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </nav>
        );
    }
}

export default NavBar;