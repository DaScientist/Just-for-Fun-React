import * as React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidUpdate() {
    console.log("object");
    this.setState({});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={() => {
              console.log("Hello");
              this.setState({});
            }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code> src / App.js </code> and save to reload.{" "}
          </p>{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React{" "}
          </a>{" "}
        </header>{" "}
        <button type="button" onClick={() => {
              console.log("Hello");
              this.setState({});
            }}>Hello world</button>
      </div>
    );
  }
}

export default App;
