const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipecontroller');

router.get('/recipes', recipeController.getRecipes);
router.get('/recipe/:id', recipeController.getRecipeById);

module.exports = router;