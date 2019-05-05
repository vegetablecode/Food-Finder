import React, { Component } from "react";

import "antd/dist/antd.less";
import "./App.css";
import AppNavbar from "./components/navbar/Navbar";

import { Switch } from 'antd';

class App extends Component {

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div><Switch defaultChecked onChange={this.onChange} /></div>
      </div>
    );
  }
}

export default App;
