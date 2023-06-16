
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

mongoose.Promise = global.Promise;

module.exports = connectDataBase = async () => {
  try {
    const databaseConnection = await mongoose.connect(process.env.DB);
    console.log(`Database connected ::: ${databaseConnection.connection.host}`);
  } catch (error) {
    console.error(`Error::: ${error.message}`);
    process.exit(1);
  }
};