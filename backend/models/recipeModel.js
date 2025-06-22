// const pool = require('../db');

// const Recipe = {
//     getAll: async () => {
//             const res = await pool.query('select * from recipes');
//             return res.rows;
//         },
//     getById:async(id) => {
//         try {
//             const res = await pool.query('SELECT * FROM recipes WHERE id = $1', [id]);
//             return res.rows[0];
//         } catch (err) {
//             console.error("DB Error:", err);
//             throw err;
//         }
//     }
// }
// module.exports = Recipe;