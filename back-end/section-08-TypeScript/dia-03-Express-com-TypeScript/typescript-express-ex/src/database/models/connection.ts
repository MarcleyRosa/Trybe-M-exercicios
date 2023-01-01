const mysql = require('mysql2/promise');

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'TypeScriptExpress',
});