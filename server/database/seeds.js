const sqlite3 = require('sqlite3').verbose();
const databaseName = require('./util').getDatabaseName();
const db = new sqlite3.Database(databaseName);

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
  db.run('INSERT INTO application (info) VALUES (?)', [JSON.stringify(applicationData)]);  
})

db.close();