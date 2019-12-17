import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import pclicker from "/home/keravnos/SalaryWars/salary-wars/src/assets/1340172427.svg";

class Game extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className=" text-white bg-dark">
          <button className="btn btn-outline-success" type="button">
            <img
              src={pclicker}
              className="App-pclicker"
              alt="pclicker"
              style={{
                height: 50,
                width: 50
              }}
            />
          </button>
          <img src={pclicker} className="App-pclicker" alt="pclicker" />
        </div>
      </div>
    );
  }
}

export default Game;
