// const Recipe = require('../models/recipeModel');

// exports.getRecipes = async(req, res) => {
//     try{
//         const recipes = await Recipe.getAll();
//         res.status(200).json(recipes);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error:'Internal server error'}, {success:'Fetched all foods successfully'});
//     }
// };

// exports.getRecipeById = async (req, res) => {
//     const { id } = req.params;
//     console.log("Fetching recipe with ID:", id);

//     try {
//         const recipe = await Recipe.getById(id);

//         if (!recipe) {
//             return res.status(404).json({ error: 'Recipe not found!' });
//         }

//         return res.status(200).json({
//             success: 'Recipe found successfully',
//             recipe: recipe
//         });
//     } catch (err) {
//         console.error("Error in getRecipeById:", err);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };