import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cName: ""
    };
  }

  render() {
    return (
      <div
        className="card container-fluid"
        style={{ backgroundColor: "#555557" }}
      >
        <div className="card-body">
          {/* Title */}
          <div className="row justify-content-center card-title">
            <h4 className="font-weight-bold border-bottom">GAME SETTINGS</h4>
          </div>
          {/* Company Name */}
          <div className="row justify-content-center">
            <div className="col2">
              <input
                className="form-control form-control-lg"
                onChange={this.props.onName}
                type="text"
                placeholder="Company Name"
                id=""
              ></input>
            </div>
          </div>
          {/* Sliders */}
          <div className="row mt-4 justify-content-between">
            <div className="col-5">
              <label className="font-weight-bolder">Players</label>
              <input
                type="range"
                className="custom-range"
                onChange={this.props.onChange}
                defaultValue="10"
                min="5"
                max="20"
                step="5"
                id="PlayersRange"
              ></input>
              <h2>
                <span id="sl_out1" className="badge badge-light badge-pill">
                  {this.props.players}
                </span>
              </h2>
            </div>
            <div className="col-5">
              <label className="font-weight-bolder">Turns</label>
              <input
                type="range"
                className="custom-range"
                onChange={this.props.onChange2}
                defaultValue="30"
                min="10"
                max="50"
                step="5"
                id="TurnsRange"
              ></input>
              <h2>
                <span className="badge badge-light badge-pill">
                  {this.props.turns}
                </span>
              </h2>
            </div>
          </div>
          {/* Submit */}
          <div className="row justify-content-center">
            <div className="col-4 mt-4">
              <button
                type="submit"
                className="btn btn-lg btn-block btn-success"
                //TODO
                onClick={this.props.onSubmit}
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
