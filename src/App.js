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
      setSets: false,
      companyName: "",
      players: "10",
      myPos: 0,
      turns: "30",
      revenue: 0,
      security: 0,
      massSecurity: 0,
      incFactor: 1.5
    };
    this.gameStart = this.gameStart.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.setSettings = this.setSettings.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.slideHandler1 = this.slideHandler1.bind(this);
    this.slideHandler2 = this.slideHandler2.bind(this);
    this.setSettings = this.setSettings.bind(this);
  }

  // start game function
  gameStart() {
    this.setState(state => ({
      gameStarted: !this.state.gameStarted,
      setSets: false,
      companyName: "",
      players: "10",
      myPos: 0,
      turns: "30",
      revenue: 0,
      security: 0,
      massSecurity: 0,
      incFactor: 1.5
    }));
  }

  // Clicker increaser
  handleIncrement() {
    this.setState({ revenue: this.state.revenue + 1 * this.state.incFactor });
  }

  nameHandler = event => {
    this.setState({ companyName: event.target.value });
  };

  slideHandler1 = event => {
    this.setState({ players: event.target.value });
  };

  slideHandler2 = event => {
    this.setState({ turns: event.target.value });
  };

  setSettings() {
    this.setState(state => ({
      setSets: true
    }));
  }

  gameRender = () => {
    if (this.state.setSets) {
      return (
        <div className="App-body text-white container-fluid my-3 mx-1 row">
          <Game
            onIncrement={this.handleIncrement}
            companyName={this.state.companyName}
            turns={this.state.turns}
            myPos={this.state.myPos}
            players={this.state.players}
          ></Game>
          <Sidebar onClick={this.gameStart}></Sidebar>
        </div>
      );
    } else {
      return (
        <div className="App-body text-white container-fluid my-3 mx-1 row">
          <Settings
            onSubmit={this.setSettings}
            onChange={this.slideHandler1}
            onChange2={this.slideHandler2}
            onName={this.nameHandler}
            companyName={this.state.companyName}
            turns={this.state.turns}
            myPos={this.state.myPos}
            players={this.state.players}
          ></Settings>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Gamenav
          revenue={this.state.revenue}
          security={this.state.security}
          massSecurity={this.state.massSecurity}
        ></Gamenav>
        {this.state.gameStarted ? (
          this.gameRender()
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
