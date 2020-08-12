// https://stackabuse.com/a-sqlite-tutorial-with-node-js/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/data.db');

const applicationData = {
  application: {
    name: 'Express and Vue Starter',
    description: 'Use this repository to get started on building your Express and Vue application',
    packages: [
      'Node.js',
      'Express',
      'SqLite3',
      'Vue'
    ]
  }
};

db.serialize(() => {
  // db.run('DROP TABLE IF EXISTS application');
  db.run(`
  CREATE TABLE IF NOT EXISTS application (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    info TEXT)`)
  db.run('INSERT INTO application (info) VALUES (?)', [JSON.stringify(applicationData)]);
  
})

db.close();