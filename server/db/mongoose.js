var mongoose = require("mongoose");
const db = process.env.MONGODB_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    mongoose.Promise = global.Promise;
    console.info(`Connected to ${db}...`);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { mongoose };
