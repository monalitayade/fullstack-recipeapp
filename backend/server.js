const express = require('express');
const cors = require('cors');
const app = express();
const foodRoutes = require('./routes/foodRoutes');
const authRoutes = require('./routes/authRoutes');
// const recipeRoutes = require('./routes/recipeRoutes');

require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/api/foods', foodRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api',recipeRoutes);

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});
