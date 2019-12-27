import React, { Component } from "react";
import "./App.css";
import Game from "./Components/game";
import Gamenav from "./Components/gameNav";
import GameFooter from "./Components/gameFooter";
import StartButton from "./Components/startButton";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./Components/sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: true,
      companyName: null,
      players: 0,
      myPos: 0,
      turn: 0
    };
    this.gameStart = this.gameStart.bind(this);
  }

  gameStart = () => {
    this.setState(state => ({
      gameStarted: !this.state.gameStarted,
      companyName: null,
      players: 0,
      myPos: 0,
      turn: 0
    }));
  };

  render() {
    return (
      <div className="App">
        <Gamenav></Gamenav>
        {this.state.gameStarted ? (
          <div className="App-body text-white container-fluid my-3 mx-1 row">
            <Game></Game>
            <Sidebar onClick={this.gameStart}></Sidebar>
          </div>
        ) : (
          <div className="App-body text-white container-fluid mt-5 d-flex align-items-center justify-content-center mb-2">
            <StartButton onClick={this.gameStart}></StartButton>
          </div>
        )}
        {/* <GameFooter></GameFooter> */}
      </div>
    );
  }
}

export default App;
