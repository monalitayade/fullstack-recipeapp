const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.getfoods); //http://localhost:5000/api/foods
router.get('/recipe/:id', controller.getRecipeById);//http://localhost:5000/api/foods/recipe/2
router.post('/create-recipe', controller.createfood);//http://localhost:5000/api/foods/create-recipe
// router.put('/update/:id', controller.updatefood);
// router.delete('/delete/:id',controller.deletefood);
// router.get('/search', controller.searchfood);

module.exports = router;