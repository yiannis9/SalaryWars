import React, { Component } from "react";
import "./App.css";
import Game from "./Components/game";
import Gamenav from "./Components/gameNav";
import StartButton from "./Components/startButton";
import Sidebar from "./Components/sidebar";
import Settings from "./Components/settings";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: true,
      companyName: "Default",
      players: 0,
      myPos: 0,
      turn: 0,
      revenue: 0,
      security: 0,
      massSecurity: 0,
      incFactor: 1.5
    };
    this.gameStart = this.gameStart.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.setSettings = this.setSettings.bind(this);
  }

  gameStart() {
    this.setState(state => ({
      gameStarted: !this.state.gameStarted,
      companyName: null,
      players: 0,
      myPos: 0,
      turn: 0,
      revenue: 0,
      reputation: 0,
      security: 0,
      massSecurity: 0
    }));
  }

  handleIncrement() {
    this.setState({ revenue: this.state.revenue + 1 * this.state.incFactor });
  }

  setSettings() {
    this.setState(state => ({
      companyName: this.props.cName,
      players: 2,
      turn: 2
    }));
  }

  render() {
    return (
      <div className="App">
        <Gamenav
          revenue={this.state.revenue}
          security={this.state.security}
          massSecurity={this.state.massSecurity}
        ></Gamenav>
        {this.state.gameStarted ? (
          <div className="App-body text-white container-fluid my-3 mx-1 row">
            <Settings
              onSubmit={this.setSettings}
              companyName={this.state.companyName}
              turn={this.state.turn}
              myPos={this.state.myPos}
              players={this.state.players}
            ></Settings>
            <Game
              onIncrement={this.handleIncrement}
              companyName={this.state.companyName}
              turn={this.state.turn}
              myPos={this.state.myPos}
              players={this.state.players}
            ></Game>
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
