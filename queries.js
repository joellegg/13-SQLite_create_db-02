const { Database } = require('sqlite3').verbose();
const db = new Database('example.sqlite');
// , () => console.log('Connected!')

// Write a statement to query the database and console.log() all employee records.
// db.all(`SELECT * FROM employees`, (err, results) => {
//   if (err) {
//     return console.log(err);
//   };
//   console.log(results);
// });


// Write a statement to query the database and console.log() each employees jobTitle.
// db.all(`SELECT e.jobTitle FROM employees e`, (err, results) => {
//   if (err) {
//     return console.log(err);
//   };
//   console.log(results);
// });


// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
// db.all(`SELECT e.firstName, e.lastName, e.address FROM employees e`, (err, results) => {
//   if (err) {
//     return console.log(err);
//   };
//   results.map(({firstName, lastName, address}) => console.log(`${firstName} ${lastName} lives at ${address}.`))
// })

// Write a statement that returns all employees of a certain jobTitle.
db.all(`SELECT e.jobTitle FROM employees e WHERE e.jobTitle = 'CEO'`, (err, results) => {
  results.map(({jobTitle}) => console.log(jobTitle));
  // results.map((each) => console.log(each.jobTitle));
})
