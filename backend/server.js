require('dotenv').config();
const app = require('./app');
const connectDB = require('./utils/db');

connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running...`);
  });
});
