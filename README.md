# 13-SQLite_create_db-02

## Instructions

A friend of yours owns a small family business and wants to start moving all of their business records into a database. Using your NodeJS skills, they want you to create a SQLite database to store information about their employees.

1. Create a database that is saved on disk.

1. Create a table titled `employees` with the following columns:
  - id, firstName, lastName, jobTitle, address

1. Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the `employees` table.
  ```js
  eg: let array = [
    { id: 0, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
    ...,
  ]
  ```

1. Insert each of the employee objects into the database.

1. Write a statement to query the database and `console.log()` all employee records.

1. Write a statement to query the database and `console.log()` each employees `jobTitle`.

1. Write a statement to query the database and `console.log()` each employees `firstName`, `lastName` and `address` only.

## Bonus Features

1. Update the employees table so that is has a `salary` column. Then update each employee record with a value for `salary`.

1. Write a statement that returns all employees of a certain `jobTitle`.
