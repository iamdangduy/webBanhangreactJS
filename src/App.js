import './App.css';
import React, { Component } from 'react';
import NavBar from './allComponent/NavBar';
import ChuyenDong from './allComponent/ChuyenDong';
import Footer from './allComponent/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DieuHuong from './dieuhuong/DieuHuong';

class App extends Component {
  render() {
    return (
      <div className="div_to">
        <Router>
        <NavBar/>
        <ChuyenDong/>
          <DieuHuong/>
        {/* <Footer/> */}
        </Router>
      </div>
    );
  }
}

export default App;
