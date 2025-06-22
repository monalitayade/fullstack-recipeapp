const Food = require('../models/foodModels');

exports.getfoods = async(req, res) => {
    try{
        const foods = await Food.getAll();
        res.status(200).json(foods);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server error'}, {success:'Fetched all foods successfully'});
    }
};
exports.getRecipeById = async(req, res) => {
    const {id} = req.params;
    if(isNaN(id)) {
        return res.status(400).json({error: 'Invalid recipe ID'});
    }
    try{
        const foods = await Food.getById(id);
        res.status(200).json(foods);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server error'}, {success:'Fetched all foods successfully'});
    }
};

exports.createfood = async(req, res) => {
    try {
        const {name, calories} = req.body;
        if((!name || !calories) || typeof calories != 'number' || calories < 0 || typeof name !='string' || name.trim() === '') {
            return res.status(400).json({error: 'Invalid inpuit data'});
        }
        const newFood = await Food.create({name, calories});
        res.status(201).json({success: 'Food created successfully', food: newFood});
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
};

exports.updatefood = async(req, res) => {
   
    try {
        const {id} = req.body;
        const {name, calories} = req.body;
        const updateFood = await Food.update(id, {name, calories});
        res.status(200).json({success: 'Food updated scuccessfully', food:updateFood});
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.deletefood = async(req, res) => {
    
    try {
        const id = parseInt(req.params.id, 10);
         console.log("🧾 ID to delete:", id);
        if(isNaN(id)){
            return res.status(400).json({error: "Invalid food ID"});
        }
        await Food.remove(id);

        res.status(200).json({success: 'Food deleted successfully'});
    } catch (err) {
        console.log("controller error",err);
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.searchfood = async(req, res) => {
    try {
        const {name} = req.query;
        if(name && typeof name !== 'string') {
            return res.status(400).json({error:'Invalid search query'});
        } 
        const foods = await Food.searchByName(name);
        if(foods?.length === 0) {
            return res.status(404).json({error:"No foods found"});
        } else {
            res.status(200).json({success:'Foods found successfully', foods:foods})
        }
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
}