const axios = require("axios");

module.exports = {
  getRecipesByIngredients: async (req, res) => {
    // Get product list from request
    const { products } = req.body;

    // Build the URL
    var getUrl =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=12&ranking=1&ignorePantry=false&ingredients=";

    for (i = 0; i < products.length; i++) {
      if (i !== 0) getUrl += "%2C";
      getUrl += products[i].name;
    }

    var recipes = {};

    // Get recipes from API
    try {
      const result = await axios({
        url: getUrl,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a081a965a4mshf1c0e056cc36ca2p10ab90jsncdd6144f1f95",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
      });
      recipes = result.data;
      //return res.status(200).json(result.data);
    } catch {
      return res.status(400).json({ msg: "Cannot find any recipes!" });
    }

    // Get descriptions from API
    for (i = 0; i < recipes.length; i++) {
      try {
        const recipeId = recipes[i].id;
        const response = await axios({
          url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "a081a965a4mshf1c0e056cc36ca2p10ab90jsncdd6144f1f95",
            "X-RapidAPI-Host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
          }
        });
        recipes[i].details = response.data;
      } catch {
        return res.status(400).json({ msg: "Cannot get descriptions!" });
      }
    }

    return res.status(200).json(recipes);
  }
};
