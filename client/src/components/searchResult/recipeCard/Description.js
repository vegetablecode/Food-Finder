import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

class Description extends Component {
  render() {
    const { title, details } = this.props;

    return (
      <div>
        <Title level={4}>{title}</Title>
        <p style={{ marginBottom: 15 }}>{details.instructions}</p>
      </div>
    );
  }
}

export default Description;
