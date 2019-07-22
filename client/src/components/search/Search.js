import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";

import "./Search.css"

class Search extends Component {
  state = {
    product: "",
    products: []
  };

  addProduct = e => {
    e.preventDefault();
    const product = {
      id: this.state.products.length,
      name: this.state.product
    };
    this.setState({
      products: [...this.state.products, product]
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const prd = [
      {
        id: 0,
        name: "grzanki"
      },
      {
        id: 1,
        name: "chlebek"
      },
      {
        id: 2,
        name: "lapek"
      },
      {
        id: 3,
        name: "ciastko"
      },
      {
        id: 4,
        name: "woda"
      },
      {
        id: 5,
        name: "kawa"
      },
      {
        id: 6,
        name: "herbate"
      },
      {
        id: 7,
        name: "lapek"
      },
      {
        id: 8,
        name: "ciastko"
      },
      {
        id: 9,
        name: "woda"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "herbate"
      },
      {
        id: 1,
        name: "chlebek"
      },
      {
        id: 2,
        name: "lapek"
      },
      {
        id: 3,
        name: "ciastko"
      },
      {
        id: 4,
        name: "woda"
      },
      {
        id: 5,
        name: "kawa"
      },
      {
        id: 6,
        name: "herbate"
      },
      {
        id: 7,
        name: "lapek"
      },
      {
        id: 8,
        name: "ciastko"
      },
      {
        id: 9,
        name: "woda"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "herbate"
      },
      {
        id: 1,
        name: "chlebek"
      },
      {
        id: 2,
        name: "lapek"
      },
      {
        id: 3,
        name: "ciastko"
      },
      {
        id: 4,
        name: "woda"
      },
      {
        id: 5,
        name: "kawa"
      },
      {
        id: 6,
        name: "herbate"
      },
      {
        id: 7,
        name: "lapek"
      },
      {
        id: 8,
        name: "ciastko"
      },
      {
        id: 9,
        name: "woda"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "herbate"
      },
      {
        id: 1,
        name: "chlebek"
      },
      {
        id: 2,
        name: "lapek"
      },
      {
        id: 3,
        name: "ciastko"
      },
      {
        id: 4,
        name: "woda"
      },
      {
        id: 5,
        name: "kawa"
      },
      {
        id: 6,
        name: "herbate"
      },
      {
        id: 7,
        name: "lapek"
      },
      {
        id: 8,
        name: "ciastko"
      },
      {
        id: 9,
        name: "woda"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "herbate"
      },
      {
        id: 1,
        name: "chlebek"
      },
      {
        id: 2,
        name: "lapek"
      },
      {
        id: 3,
        name: "ciastko"
      },
      {
        id: 4,
        name: "woda"
      },
      {
        id: 5,
        name: "kawa"
      },
      {
        id: 6,
        name: "herbate"
      },
      {
        id: 7,
        name: "lapek"
      },
      {
        id: 8,
        name: "ciastko"
      },
      {
        id: 9,
        name: "woda"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "herbate"
      },
      {
        id: 1,
        name: "chlebek"
      },
      {
        id: 2,
        name: "lapek"
      },
      {
        id: 3,
        name: "ciastko"
      },
      {
        id: 4,
        name: "woda"
      },
      {
        id: 5,
        name: "kawa"
      },
      {
        id: 6,
        name: "herbate"
      },
      {
        id: 7,
        name: "lapek"
      },
      {
        id: 8,
        name: "ciastko"
      },
      {
        id: 9,
        name: "woda"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "herbate"
      }
    ];
    const productList = prd.map(product => (
      <Button className="tag-button" type="primary" size="small" icon="close" key={product.id}>{product.name}</Button>
    ));
    return (
      <div>
        <Form onSubmit={e => this.addProduct(e)}>
          <Form.Item>
            <Input
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
        <Button type="primary" shape="round" icon="search" size="large">
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

export default Search;
