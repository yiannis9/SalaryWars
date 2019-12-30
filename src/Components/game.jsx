import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import pclicker from "/home/keravnos/SalaryWars/salary-wars/src/assets/1340172427.svg";
import Background from "/home/keravnos/SalaryWars/salary-wars/src/assets/bg-tiles.png";

class Game extends Component {
  render() {
    return (
      <div className="col-10 justify-content-center mt-3 card text-white bg-dark">
        <div className="card-header row">
          <div className="col">
            <h4>Company: {this.props.companyName}</h4>
          </div>
          <div className="col">
            <h4>Players: {this.props.players}</h4>
          </div>
          <div className="col">
            <h4>Position: {this.props.myPos}</h4>
          </div>
          <div className="col">
            <h4>Turn: {this.props.turn}</h4>
          </div>
        </div>
        <div
          className="card-body"
          style={{ backgroundImage: "url(" + Background + ")" }}
        >
          {/* <Settings onSubmit={this.props.setSettings}></Settings> */}
          {/* Clicker */}
          <div>
            <img
              src={pclicker}
              className="App-pclicker"
              alt="pclicker"
              style={{
                height: 150,
                width: 150
              }}
              onClick={this.props.onIncrement}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
