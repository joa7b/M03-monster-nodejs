const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://joa7b:99780052b@cluster0.roke793.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MONGODB CONNECT_TO_DATABASE'))
    .catch((error) => console.log(`MONGODB error: ${error}`));
};

module.exports = connectToDatabase;
