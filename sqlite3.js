#!/usr/bin/env node

// requires a stricter form of javascript to alert where there are errors that js would have otherwise ignored
'use strict';

// Require in the Database method from the sqlite3 module
// We will be using the verbose execution mode, which will help with debugging errors. Creates long stack traces
const { Database } = require('sqlite3').verbose();

// Returns a new database object and automatically opens the database
// Database method accepts a callback function for successful connection
// Changes will persist once connection closes
const db = new Database('example.sqlite', () => console.log('Connected!'));
console.log(db);

// Passing in IF NOT EXISTS after CREATE TABLE will check to make sure there are no tables named 'employees'
// If it does exist, this line will not run
db.run("CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)");
