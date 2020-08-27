import sqlite3 from 'sqlite3';
const db = new (sqlite3.verbose()).Database('./database/data.db');

const appData = {
  fetch() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * from application';

      db.all(sql, [], (err, rows) => {
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

export default appData;