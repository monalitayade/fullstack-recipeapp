const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');


exports.signUp = async(req, res) => {
    
    const {username,email, password} = req.body;
    try {
        const user = await User.findByEmail(email);

        if(user) {
            return res.status(400).json({message:"User already present with registered email id."});
        } else {
            const hashedPwd = await bcrypt.hash(password, 10);
            await User.create({username,email,password: hashedPwd});
            return res.status(200).json({message:"User created successfully."});
        }
    } catch(err) {
        console.log("error", err);
        res.status(500).json({error: 'Internal server error'});
    }
}

exports.signIn = async(req,res) => {
    const {email,password} = req.body;
    console.log("--> 26",req.body);
    try {
        const user = await User.findByEmail(email);
        console.log("--> 29",user);
        if(!user) return res.status(400).json({message:"Invalid credentials"});
        
        const matched = await bcrypt.compare(password, user.password);
        console.log("--->33",matched)
        if(!matched) return res.status(400).json({message:"Invalid credentials"});

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message:"Login successfully.",
            token,
            user:{
                id: user.id,
                username: user.username,
                email: user.email 
            }
        });
    } catch(err) {
        console.log(err);
        return res.status(500).json({error:'Internal server error.'})
    }
}