const getDatabaseName = () => {
  const dotenv = require('dotenv');
  dotenv.config();
    
  if (process.env.NODE_ENV === 'test') {
    return databaseName = './database/data-test.db';
  }
  return './database/data.db';
}

module.exports = {
  getDatabaseName
}