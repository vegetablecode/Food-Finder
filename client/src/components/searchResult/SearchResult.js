import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getRecipes } from "../../actions/searchActions";
import RecipeCard from "./recipeCard/RecipeCard";

class SearchResult extends Component {
  static propTypes = {
    getRecipes: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getRecipes(this.props.products);
  }

  render() {
    const recipe = {
      id: 47950,
      title: "Cinnamon Apple Crisp",
      image: "https://spoonacular.com/recipeImages/47950-312x231.jpg",
      imageType: "jpg",
      usedIngredientCount: 2,
      missedIngredientCount: 3,
      missedIngredients: [
        {
          id: 19334,
          amount: 0.75,
          unit: "cup",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Baking",
          name: "brown sugar",
          original: "3/4 cup firmly packed brown sugar",
          originalString: "3/4 cup firmly packed brown sugar",
          originalName: "firmly packed brown sugar",
          metaInformation: ["packed"],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/dark-brown-sugar.png"
        },
        {
          id: 93674,
          amount: 0.5,
          unit: "cup",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Milk, Eggs, Other Dairy",
          name: "cinnamon sugar butter",
          original: "1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread",
          originalString: "1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread",
          originalName: "Land O Lakes® Cinnamon Sugar Butter Spread",
          metaInformation: ["lakes®"],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/cinnamon-sugar-butter.png"
        },
        {
          id: 8120,
          amount: 0.75,
          unit: "cup",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Cereal",
          name: "old-fashioned oats",
          original: "3/4 cup uncooked old-fashioned oats",
          originalString: "3/4 cup uncooked old-fashioned oats",
          originalName: "uncooked old-fashioned oats",
          metaInformation: ["uncooked"],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"
        }
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 6,
          unit: "cups",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Produce",
          name: "apples",
          original: "6 medium (6 cups) apples, peeled, cored, sliced",
          originalString: "6 medium (6 cups) apples, peeled, cored, sliced",
          originalName: "medium apples, peeled, cored, sliced",
          metaInformation: ["cored", "peeled", "sliced"],
          image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
        },
        {
          id: 20081,
          amount: 0.5,
          unit: "cup",
          unitLong: "cups",
          unitShort: "cup",
          aisle: "Baking",
          name: "flour",
          original: "1/2 cup all-purpose flour",
          originalString: "1/2 cup all-purpose flour",
          originalName: "all-purpose flour",
          metaInformation: ["all-purpose"],
          image: "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
        }
      ],
      unusedIngredients: [
        {
          id: 19335,
          amount: 1,
          unit: "serving",
          unitLong: "serving",
          unitShort: "serving",
          aisle: "Baking",
          name: "sugar",
          original: "sugar",
          originalString: "sugar",
          originalName: "sugar",
          metaInformation: [],
          image:
            "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
        }
      ],
      likes: 35,
      details: {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 13,
        gaps: "no",
        lowFodmap: false,
        ketogenic: false,
        whole30: false,
        preparationMinutes: 25,
        cookingMinutes: 20,
        sourceUrl: "http://www.landolakes.com/recipe/3168/cinnamon-apple-crisp",
        spoonacularSourceUrl:
          "https://spoonacular.com/cinnamon-apple-crisp-47950",
        aggregateLikes: 35,
        spoonacularScore: 31,
        healthScore: 3,
        pricePerServing: 83.17,
        extendedIngredients: [
          {
            id: 9003,
            aisle: "Produce",
            image: "apple.jpg",
            consitency: "solid",
            name: "apples",
            original: "6 medium (6 cups) apples, peeled, cored, sliced",
            originalString: "6 medium (6 cups) apples, peeled, cored, sliced",
            originalName: "medium apples, peeled, cored, sliced",
            amount: 6,
            unit: "cups",
            meta: ["cored", "peeled", "sliced"],
            metaInformation: ["cored", "peeled", "sliced"],
            measures: {
              us: {
                amount: 6,
                unitShort: "cups",
                unitLong: "cups"
              },
              metric: {
                amount: 1.42,
                unitShort: "l",
                unitLong: "liters"
              }
            }
          },
          {
            id: 19334,
            aisle: "Baking",
            image: "dark-brown-sugar.png",
            consitency: "solid",
            name: "brown sugar",
            original: "3/4 cup firmly packed brown sugar",
            originalString: "3/4 cup firmly packed brown sugar",
            originalName: "firmly packed brown sugar",
            amount: 0.75,
            unit: "cup",
            meta: ["packed"],
            metaInformation: ["packed"],
            measures: {
              us: {
                amount: 0.75,
                unitShort: "cups",
                unitLong: "cups"
              },
              metric: {
                amount: 177.441,
                unitShort: "ml",
                unitLong: "milliliters"
              }
            }
          },
          {
            id: 93674,
            aisle: "Milk, Eggs, Other Dairy",
            image: "cinnamon-sugar-butter.png",
            consitency: "solid",
            name: "cinnamon sugar butter",
            original: "1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread",
            originalString:
              "1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread",
            originalName: "Land O Lakes® Cinnamon Sugar Butter Spread",
            amount: 0.5,
            unit: "cup",
            meta: ["lakes®"],
            metaInformation: ["lakes®"],
            measures: {
              us: {
                amount: 0.5,
                unitShort: "cups",
                unitLong: "cups"
              },
              metric: {
                amount: 118.294,
                unitShort: "ml",
                unitLong: "milliliters"
              }
            }
          },
          {
            id: 20081,
            aisle: "Baking",
            image: "flour.png",
            consitency: "solid",
            name: "flour",
            original: "1/2 cup all-purpose flour",
            originalString: "1/2 cup all-purpose flour",
            originalName: "all-purpose flour",
            amount: 0.5,
            unit: "cup",
            meta: ["all-purpose"],
            metaInformation: ["all-purpose"],
            measures: {
              us: {
                amount: 0.5,
                unitShort: "cups",
                unitLong: "cups"
              },
              metric: {
                amount: 118.294,
                unitShort: "ml",
                unitLong: "milliliters"
              }
            }
          },
          {
            id: 8120,
            aisle: "Cereal",
            image: "rolled-oats.jpg",
            consitency: "solid",
            name: "old-fashioned oats",
            original: "3/4 cup uncooked old-fashioned oats",
            originalString: "3/4 cup uncooked old-fashioned oats",
            originalName: "uncooked old-fashioned oats",
            amount: 0.75,
            unit: "cup",
            meta: ["uncooked"],
            metaInformation: ["uncooked"],
            measures: {
              us: {
                amount: 0.75,
                unitShort: "cups",
                unitLong: "cups"
              },
              metric: {
                amount: 177.441,
                unitShort: "ml",
                unitLong: "milliliters"
              }
            }
          }
        ],
        id: 47950,
        title: "Cinnamon Apple Crisp",
        readyInMinutes: 45,
        servings: 6,
        image: "https://spoonacular.com/recipeImages/47950-556x370.jpg",
        imageType: "jpg",
        cuisines: [],
        dishTypes: ["side dish"],
        diets: ["lacto ovo vegetarian"],
        occasions: [],
        winePairing: {},
        instructions:
          "Beat the egg in a bowl, add a pinch of salt and the flour and pour in the extra virgin olive oil and the beer: if needed, add a tablespoon of water to make a smooth but not too liquid batter. It is supposed to cover the apples, not to slide off!Peel the apples, core them paying attention not to break them and cut the apples into horizontal slices, 1 cm thick.Heat the olive oil in a large frying pan. The right moment to fry the apples is when the oil starts to smoke, as grandma says. Dip the apple slices into the batter and deep fry them until cooked through and golden on both sides.Transfer the apples into a plate lined with a paper towel. Sprinkle the fritters with icing sugar and serve them warm.",
        analyzedInstructions: [],
        sourceName: null,
        creditsText: null
      }
    };

    return (
      <div>
        <RecipeCard recipe={recipe} />
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
