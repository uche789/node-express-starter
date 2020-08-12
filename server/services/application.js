const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/data.db');

const appData = {
  fetch() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * from application', [], (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          const formatted = rows.map(row => {
            return {
              id: row.id,
              info: JSON.parse(row.info)
            }
          });
          resolve(formatted)
        }
      })
    })
  }
} 

module.exports = appData;