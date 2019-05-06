import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Menu } from "antd";

import "../../styles/navbar/Navbar.css";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href="">Kung Food</a>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Menu mode="vertical">
              <Menu.Item key="mail">
                <a href="">Home</a>
              </Menu.Item>
              <Menu.Item key="about">
                <a href="">About</a>
							</Menu.Item>
							<Menu.Item key="mail">
							<a href="">Sign In</a>
						</Menu.Item>
						<Menu.Item key="about">
							<a href="">Sign Up</a>
						</Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
