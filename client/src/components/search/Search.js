import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Form, Input, Icon, Button, notification } from "antd";
import "./Search.css";

import { addProducts } from "../../actions/searchActions";
import { getRecipes } from "../../actions/searchActions";

class Search extends Component {
  state = {
    product: "",
    products: []
  };

  static propTypes = {
    addProducts: PropTypes.func.isRequired
  };

  addProduct = e => {
    e.preventDefault();

    // if input field is not null
    if (this.state.product !== "" && this.state.product !== null) {
      // add product to state
      const product = {
        id: this.state.products.length,
        name: this.state.product
      };
      this.setState({
        products: [...this.state.products, product],
        product: ""
      });

      // clear input filed
      this.productInput.setState({ value: "" });
    }
  };

  onChange = e => {
    // if typed world ends with comma
    if (e.target.value.endsWith(",")) {
      this.addProduct(e);
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchForReciepes = () => {
    // check if there is at least one product added
    if (this.state.products.length > 0) {
      // add products to local store
      this.props.addProducts(this.state.products);
      this.props.history.push("/loadingPage");
      //this.props.getRecipes(this.state.products, this.props.history);
    } else {
      // show notification
      this.openNotificationWithIcon("info");
    }
  };

  openNotificationWithIcon = type => {
    notification[type]({
      message: "Cannot find the recipes!",
      description: "You have to add at least one product!"
    });
  };

  removeProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId)
    });
  };

  render() {
    const productList = this.state.products.map(product => (
      <Button
        onClick={() => this.removeProduct(product.id)}
        className="tag-button"
        type="primary"
        size="small"
        icon="close"
        key={product.id}
      >
        {product.name}
      </Button>
    ));
    return (
      <div>
        <Form onSubmit={e => this.addProduct(e)}>
          <Form.Item>
            <Input
              ref={el => (this.productInput = el)}
              prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              name="product"
              id="product"
              placeholder="enter your ingredients here..."
              onChange={this.onChange}
              size="large"
              suffix={
                <Button
                  onClick={e => this.addProduct(e)}
                  className="search-btn"
                  style={{ marginRight: -12 }}
                  size="large"
                  type="primary"
                >
                  <Icon type="plus" />
                </Button>
              }
            />
          </Form.Item>
        </Form>
        <Button
          onClick={() => this.searchForReciepes()}
          type="primary"
          shape="round"
          icon="search"
          size="large"
        >
          Search for reciepes
        </Button>
        <div className="scrollouter">
          <div className="scrollinner" id="scroll-bar">
            {productList}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addProducts, getRecipes }
)(withRouter(Search));
