import React, { Component } from "react";
import logo from "/home/keravnos/SalaryWars/salary-wars/src/logo.svg";
import "bootstrap/dist/css/bootstrap.css";

class GameFooter extends Component {
  render() {
    return (
      <footer className="App-footer fixed-bottom">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">Powered by React </p>
      </footer>
    );
  }
}

export default GameFooter;
