import React, { Component } from "react";
import { Typography, List, Avatar } from "antd";

const { Title } = Typography;

class Ingredients extends Component {
  render() {
    const { title, ingredients } = this.props;

    return (
      <div>
        <Title level={4}>{title}</Title>
        <List
          itemLayout="horizontal"
          dataSource={ingredients}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} size="large" shape="square" />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.original}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Ingredients;
