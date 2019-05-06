import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";

import { Button } from "antd";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
