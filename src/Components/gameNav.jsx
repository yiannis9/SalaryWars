import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

class Gamenav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark mx-auto row">
        {/* Navbar brand */}
        <div className="col-2 navbar-brand">
          <h2 className="pl-1 pr-5 py-3 text-break">Salary Wars</h2>
          {/* Desing some fancy graphic to have below brand */}
          <i className="fas fa-money-bill-wave pr-1"></i>
          <i className="fas fa-money-bill-wave pr-1"></i>
          <i className="fas fa-money-bill-wave pr-1"></i>
          <i className="fas fa-money-bill-wave pr-1"></i>
          <i className="fas fa-money-bill-wave pr-1"></i>
          <i className="fas fa-money-bill-wave pr-1"></i>
        </div>
        {/* Stats */}
        <div className="col-9">
          <div className="row navbar-nav pl-5 d-flex flex-row">
            {/* Revenue */}
            <div className="col-3 nav-item nav-link mx-auto">
              <h3 className="row">Revenue</h3>
              <h3 className="row">
                <span className="badge badge-success badge-swing badge-pill">
                  {this.props.revenue}
                  <i className="fas fa-dollar-sign pl-5"></i>
                </span>
              </h3>
            </div>
            {/* Security */}
            <div className="col-3 nav-item nav-link mx-auto">
              <h3 className="row ">Security</h3>
              <h3 className="row ">
                <span className="badge badge-warning badge-swing badge-pill">
                  {this.props.security}
                  <i className="fas fa-shield-alt pl-4"></i>
                </span>
              </h3>
            </div>
            {/* Mass security */}
            <div className="col-3 nav-item nav-link mx-auto">
              <h3 className="row ">Mass Security</h3>
              <h3 className="row ">
                <span className="badge badge-danger badge-swing badge-pill">
                  {this.props.massSecurity}
                  <i className="fab fa-fort-awesome pl-4"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Gamenav;
