// const { Pool } = require('pg');
// const dotenv = require('dotenv');

// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.CONNECTION_STRING,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// pool.on('error', (err) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
