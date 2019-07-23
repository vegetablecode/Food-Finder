const axios = require("axios");

module.exports = {
  getRecipesByIngredients: async (req, res) => {
    // Get product list from request
    const { products } = req.body;

    // Build the URL
    var getUrl =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&";

    for (i = 0; i < products.length; i++) {
      if (i !== 0) getUrl += "%2C";
      getUrl += products[i];
    }

    // Get recipes from API
    try {
      const result = await axios({
        url:
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/dindByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=#)(id03w830j",
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a081a965a4mshf1c0e056cc36ca2p10ab90jsncdd6144f1f95",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
      });
      return res.status(200).json(result.data);
    } catch {
      return res.status(400).json({ msg: "Cannot find any recipes!" });
    }
  }
};
