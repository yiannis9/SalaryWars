import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      slVal1: "10",
      slVal2: "30",
      cName: ""
    };
  }

  showSettings() {
    this.setState({ show: !this.state.show });
  }

  nameHandler = event => {
    this.setState({ username: event.target.value });
  };

  slideHandler1 = event => {
    this.setState({ slVal1: event.target.value });
  };

  slideHandler2 = event => {
    this.setState({ slVal2: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  };

  render() {
    return (
      <div className="card bg-info container-fluid">
        <div className="card-body">
          {/* Title */}
          <div className="row justify-content-center card-title">
            <h4 className="font-weight-bold border-bottom">GAME SETTINGS</h4>
          </div>
          {/* Company Name */}
          <form onSubmit={this.submitHandler}>
            <div className="row justify-content-center">
              <div className="col2">
                <input
                  className="form-control form-control-lg"
                  onChange={this.nameHandler}
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
                  onChange={this.slideHandler}
                  defaultValue="10"
                  min="5"
                  max="20"
                  step="5"
                  id="PlayersRange"
                ></input>
                <span id="sl_out1" className="badge badge-light badge-pill">
                  {this.state.slVal1}
                </span>
              </div>
              <div className="col">
                <label className="font-weight-bolder">Turns</label>
                <input
                  type="range"
                  className="custom-range"
                  onChange={this.slideHandler2}
                  defaultValue="30"
                  min="10"
                  max="50"
                  step="5"
                  id="TurnsRange"
                ></input>
                <span className="badge badge-light badge-pill">
                  {this.state.slVal2}
                </span>
              </div>
            </div>
            {/* Submit */}
            <div className="row justify-content-center">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-large btn-primary"
                  //TODO
                  onClick={this.props.onSubmit}
                >
                  Submit
                  <i className="mx-1 far fa-check-square"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
