
const pool = require('../db');

// const auth = {
//     create:async({username,email,pwd}) => {
//         try{
//             const UserExists = await pool.query('select * from users where email = $',[username,email,pwd]);
//             if(UserExists?.rows?.length > 0) {
//                 return res.status(400).json({error:"User already exist."});
//             }

//             const salt = await bcrypt.genSalt(10);
//             const hashPwd = await bcrypt.hash(pwd,salt);

//             // Insert user
//             const newUser = await pool.query(
//             'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
//             [username, email, hashPwd]
//             );

//             res.status(201).json({ success: 'User created', user: newUser.rows[0] });

//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Server error' });
//         }
//     }
// }
const User = {
    findByEmail: async(email) => {
        const res = await pool.query('select * from users where email = $1',[email]);
        return res.rows[0];
    },
    create: async({username, email, password}) => {
        const res = await pool.query('insert into users (username,email,password) values($1, $2,$3) returning id, username,email,password',[username,email,password]);
        return res.rows[0];
    }
    
}

module.exports = User;


