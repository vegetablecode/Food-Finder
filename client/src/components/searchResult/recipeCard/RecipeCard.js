import React, { Component } from "react";
import { Card, Icon, Col } from "antd";
import Ingredients from "./Ingredients";
import Description from "./Description";

class RecipeCard extends Component {
  render() {
    const { recipe } = this.props;

    const readyIn = (
      <div>
        <Icon type="clock-circle" style={{ marginRight: 5 }} />
        {recipe.details.readyInMinutes} mins{" "}
      </div>
    );

    return (
      <Card
        style={{ marginRight: 20, marginBottom: 20 }}
        title={recipe.title}
        extra={readyIn}
        cover={<img alt="example" src={recipe.image} />}
        actions={[
          <Icon type="heart" />,
          <Icon type="save" />,
          <Icon type="ellipsis" />
        ]}
      >
        <Col>
          <Description title={"Instruction"} details={recipe.details} />
          <Ingredients
            title={"Missed Ingredients"}
            ingredients={recipe.missedIngredients}
          />
          <Ingredients
            title={"Used Ingredients"}
            ingredients={recipe.usedIngredients}
          />
          <Ingredients
            title={"Unused Ingredients"}
            ingredients={recipe.unusedIngredients}
          />
        </Col>
      </Card>
    );
  }
}

export default RecipeCard;
