const mongoose = require('mongoose');

 const connectDB = async () => {
  try {
    // const url = process.env.DB_URI || 'mongodb://127.0.0.1:27017';
    const url = process.env.DB_URI ;
    await mongoose.connect(url);
    console.log("Connection established");
  } catch (err) {
    console.error("Error occurred: ", err);
    throw err; 
  }
};

module.exports=connectDB;
