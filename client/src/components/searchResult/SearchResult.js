import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getRecipes } from "../../actions/searchActions";

class SearchResult extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired,
    getRecipes: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getRecipes(this.props.products);
  }

  render() {
    return <div>productList</div>;
  }
}

const mapStateToProps = state => ({
  products: state.search.products,
  recipes: state.search.recipes
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(SearchResult);
