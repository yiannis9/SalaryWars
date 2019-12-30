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
            <h4>
              Company:
              <span className="gbadge badge badge-light badge-pill">
                {this.props.companyName}
              </span>
            </h4>
          </div>
          <div className="col">
            <h4>
              Players
              <span className="gbadge badge badge-light badge-pill mx-1">
                {this.props.players}
              </span>
            </h4>
          </div>
          <div className="col">
            <h4>
              Position
              <span className="gbadge badge badge-light badge-pill mx-1">
                {this.props.myPos}
              </span>
            </h4>
          </div>
          <div className="col">
            <h4>
              Turn
              <span className="gbadge badge badge-light badge-pill mx-1">
                {this.props.turns}
              </span>
            </h4>
          </div>
        </div>
        <div
          className="card-body"
          style={{ backgroundImage: "url(" + Background + ")" }}
        >
          {/* Clicker */}
          <div className="">
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
