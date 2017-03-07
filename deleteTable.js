const { Database } = require('sqlite3').verbose();
const db = new Database('example.sqlite');

db.run(`DROP TABLE employees`);
