const mogoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mogoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mongoose connected...');
  } catch (err) {
    console.error(err.message);
    // Exit
    process.exit(1);
  }
};

module.exports = connectDB;
