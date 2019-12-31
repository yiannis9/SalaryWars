import React, { Component } from "react";
import desk from "/home/keravnos/SalaryWars/salary-wars/src/assets/desk.png";
import "bootstrap/dist/css/bootstrap.css";

class Desk extends Component {
  state = {};
  render() {
    return (
      <div className="d-inline">
        <img
          src={desk}
          alt="desk"
          style={{
            height: "40%",
            width: "40%"
          }}
        />
      </div>
    );
  }
}

export default Desk;
