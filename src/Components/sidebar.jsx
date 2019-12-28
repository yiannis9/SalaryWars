import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-2 card bg-dark mt-3">
        <div className="row">
          <div className="bg-dark card-body col">
            <button
              onClick={this.props.onClick}
              className="float-right btn btn-success rounded-circle shadow-lg  restart"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Reset Game"
            >
              <i className="fas fa-undo fa-2x py-2 px-2 py-3"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
