import React, { Component } from "react";
import { Typography, List, Avatar } from "antd";

const { Title } = Typography;

class Ingredients extends Component {
  render() {
    const { title, ingredients } = this.props;

    const ingredientList =
      ingredients.length > 0 ? (
        <div>
          <Title level={4}>{title}</Title>
          <List
            itemLayout="horizontal"
            dataSource={ingredients}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.image} size="large" shape="square" />
                  }
                  title={<p>{item.name}</p>}
                  description={item.original}
                />
              </List.Item>
            )}
          />
        </div>
      ) : (
        ""
      );

    return ingredientList;
  }
}

export default Ingredients;
