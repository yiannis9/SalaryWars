import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

class StartButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="d-flex align-items-center btn btn-outline-success btn-lg rounded-pill shadow-lg py-4 px-5"
      >
        <h1 className="text-white start">Start</h1>
        <i className="fas fa-play fa-6x ml-2"></i>
      </button>
    );
  }
}

export default StartButton;
