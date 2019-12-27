import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0
    };
  }

  showSettings() {
    this.setState({ show: true });
  }
  getPlayers = () => {
    let x = document.getElementById("PlayersRange").value;
    return x;
  };

  render() {
    return (
      <div className="card bg-info container-fluid">
        <div className="card-body">
          {/* Title */}
          <div className="row justify-content-center">
            <h4 class="card-title font-weight-bold">Game Settings</h4>
          </div>
          {/* Company Name */}
          <div className="row justify-content-center">
            <div className="col2">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Company Name"
                id=""
              ></input>
            </div>
          </div>
          {/* Sliders */}
          <div className="row mt-4">
            <div className="col">
              <label className="font-weight-bolder">Players</label>
              <input
                type="range"
                className="custom-range"
                defaultValue="10"
                min="5"
                max="20"
                step="5"
                id="PlayersRange"
              ></input>
              <p className="font-weight-light">
                Value:{" "}
                <span className="badge badge-light">w{this.getPlayers}</span>
              </p>
            </div>
            <div className="col">
              <label className="font-weight-bolder">Turns</label>
              <input
                type="range"
                className="custom-range"
                defaultValue="30"
                min="10"
                max="50"
                step="5"
                id="TurnsRange"
              ></input>
              <p className="font-weight-light">
                Value:
                <span className="badge badge-light">hm</span>
              </p>
            </div>
          </div>
          {/* Submit */}
          <div className="row justify-content-center">
            <div className="col-4">
              <button
                type="submit"
                className="btn btn-large btn-primary"
                //TODO
                onSubmit=""
              >
                Submit
                <i className="mx-1 far fa-check-square"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
