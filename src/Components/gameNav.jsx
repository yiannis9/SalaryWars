import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

class Gamenav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark mx-auto row">
        {/* Navbar brand */}
        <div className="col-3 navbar-brand">
          <h2 className="pl-1 pr-5 py-3 border rounded-pill">
            <i className="fas fa-money-bill-wave pr-1"></i>
            Salary Wars
          </h2>
        </div>
        {/* Stats */}
        <div className="col-9">
          <div className="row navbar-nav pl-5 align-items-center">
            {/* Revenue */}
            <div className="col nav-item nav-link px-5 col">
              <h3 className="row justify-content-center">Revenue</h3>
              <h3 className="row justify-content-center">
                <span className="badge badge-success badge-swing">
                  {this.props.revenue}
                  <i className="fas fa-dollar-sign pl-5"></i>
                </span>
              </h3>
            </div>
            {/* Security */}
            <div className="col nav-item nav-link px-5 col">
              <h3 className="row justify-content-center">Security</h3>
              <h3 className="row justify-content-center">
                <span className="badge badge-warning badge-swing">
                  {this.props.security}
                  <i className="fas fa-shield-alt pl-4"></i>
                </span>
              </h3>
            </div>
            {/* Mass security */}
            <div className="col nav-item nav-link px-5 col ">
              <h3 className="row justify-content-center">Mass Security</h3>
              <h3 className="row justify-content-center">
                <span className="badge badge-danger badge-swing">
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
