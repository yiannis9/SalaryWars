import React, { Component } from "react";
import "./App.css";
import "./utilities/Modal";
import "./Components/game";
import "./Components/gameNav";
import Game from "./Components/game";
import Gamenav from "./Components/gameNav";
import GameFooter from "./Components/gameFooter";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  getGame() {
    return <Game></Game>;
  }

  render() {
    return (
      <div className="App">
        {/* <div className="Modal"> </div> */}
        <Gamenav></Gamenav>
        <div className="App-body container-fluid">
          <Game></Game>
        </div>
        <GameFooter></GameFooter>
      </div>
    );
  }
}

export default App;
