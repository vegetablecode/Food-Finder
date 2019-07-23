import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SearchResult extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
      console.log(this.props.products)
    // const productList = this.props.products.map(product => {
    //   <div>
    //     - {product} <br />
    //   </div>;
    // });
    return <div>productList</div>;
  }
}

const mapStateToProps = state => ({
  products: state.search.products
});

export default connect(
  mapStateToProps,
  {}
)(SearchResult);
