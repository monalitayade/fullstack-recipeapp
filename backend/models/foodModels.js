const pool = require('../db');

const Food = {
    getAll: async () => {
        const res = await pool.query('select * from recipes_list');
        return res.rows;
    },
    getById:async(id) => {
        try {
            const res = await pool.query('SELECT * FROM recipes_list WHERE recipe_id = $1', [id]);
            return res.rows[0];
        } catch (err) {
            console.error("DB Error:", err);
            throw err;
        }
    },
    create: async ({ name,calories}) => {
        const res = await pool.query('insert into recipe_listing (name, calories) values ($1, $2) returning *', [name,calories]);
        return res.rows[0];
    },
    update: async(id, {name, calories}) => {
        const res = await pool.query('update recipe_listing set name = $1, calories = $2 where id = $3 returning *', [name, calories,id]);
        return res.rows[0];
    },
    remove:async (id) => {
        console.log("📦 Removing ID in model:", id);
        await pool.query('delete from recipe_listing where id=$1',[id]);
        //console.log("✅ Deleted rows count:", result.rowCount);
    },
    searchByName: async(name) => {
        const res = await pool.query('SELECT * FROM recipe_listing WHERE LOWER(name) LIKE LOWER($1)',
        [`%${name}%`]);
        return res.rows;
    }
}

module.exports = Food;