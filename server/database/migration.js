// https://stackabuse.com/a-sqlite-tutorial-with-node-js/

const sqlite3 = require('sqlite3').verbose();
const databaseName = require('./util').getDatabaseName();
const db = new sqlite3.Database(databaseName);

db.serialize(() => {
  db.run(`
  CREATE TABLE IF NOT EXISTS application (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    info TEXT)`)  
})

db.close();