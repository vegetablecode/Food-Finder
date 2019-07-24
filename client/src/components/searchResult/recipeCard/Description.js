import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

class Description extends Component {
  render() {
    const { title, details } = this.props;

    const instructions = details.instructions
      ? details.instructions
      : "No instruction added.";

    return (
      <div>
        <Title level={4}>{title}</Title>
        <p style={{ marginBottom: 15 }}>{instructions}</p>
      </div>
    );
  }
}

export default Description;
