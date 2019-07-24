import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getRecipes } from "../../actions/searchActions";
import RecipeCard from "./recipeCard/RecipeCard";
import { Row, Col } from "antd";

class SearchResult extends Component {
  static propTypes = {
    getRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired
  };

  render() {
    const recipes = this.props.recipes.map(recipe => (
      <Col key={recipe.id} xs={24} sm={24} md={12} lg={12} xl={6}>
        <RecipeCard recipe={recipe} />
      </Col>
    ));

    return (
      <div>
        <Row justify="start" align="top" type="flex">{recipes}</Row>
      </div>
    );
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
