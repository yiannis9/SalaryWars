import React, { Component } from "react";
import logo from "/home/keravnos/SalaryWars/salary-wars/src/logo.svg";
import "bootstrap/dist/css/bootstrap.css";

class GameFooter extends Component {
  render() {
    return (
      <div className="App-footer fixed-bottom d-flex align-items-center justify-content-center">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">Powered by React </p>
      </div>
    );
  }
}

export default GameFooter;
