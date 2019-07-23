const express = require("express");
const router = express.Router();

const asyncMiddleware = require("../middleware/asyncMiddleware");
const ExampleController = require("../controllers/recipes");

router
  .route("/getbyingredients")
  // @route   GET api/recipes/getbyingredients
  // @desc    Get list of recipes from ingredients
  // @access  Public
  .post(asyncMiddleware(ExampleController.getRecipesByIngredients));

module.exports = router;
