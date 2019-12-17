import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

class Gamenav extends Component {
  state = {
    revenue: 0,
    reputation: 0,
    security: 0,
    massSecurity: 0
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 mx-auto">
        <div className="col-2 navbar-brand ">
          <h2>
            <i className="fas fa-money-bill-wave pr-4"></i>
            Salary Wars
          </h2>
        </div>
        <div className="col-10">
          <div className="row navbar-nav pl-5">
            <div className="col nav-item nav-link px-5 col">
              <h3 className="">
                Revenue
                <span className="badge badge-success badge-swing">
                  {this.state.revenue}
                  <i className="fas fa-dollar-sign pl-4"></i>
                </span>
              </h3>
            </div>
            <div className="col nav-item nav-link px-5 col">
              <h3>
                Security
                <span className="badge badge-warning badge-swing">
                  {this.state.security}
                  <i className="fas fa-shield-alt pl-4"></i>
                </span>
              </h3>
            </div>
            <div className="col nav-item nav-link px-5 col">
              <h3>
                Mass Security
                <span className="badge badge-danger badge-swing">
                  {this.state.massSecurity}
                  <i className="fab fa-fort-awesome pl-4"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  incrementRevenue() {
    const { revenue } = this.state;
    return revenue === 0 ? "zero" : revenue;
  }
}

export default Gamenav;
