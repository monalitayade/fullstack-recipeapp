const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.getfoods);
router.get('/recipe/:id', controller.getRecipeById);
router.post('/create', controller.createfood);
router.put('/update/:id', controller.updatefood);
router.delete('/delete/:id',controller.deletefood);
router.get('/search', controller.searchfood);

module.exports = router;