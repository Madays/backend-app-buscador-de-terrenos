const mongoose = require('mongoose');

const createDbConnection = async (dbURL) => {
  try{
    await mongoose.connect(dbURL)
    console.log('DB connected')
  } catch(err){
    console.log('error on connection', err)
  }
}

module.exports = createDbConnection
