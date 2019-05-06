import React, { Component } from "react";
import { Menu } from "antd";

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="">About</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
