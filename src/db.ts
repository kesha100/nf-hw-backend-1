const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://kesha100:PpHi5867BkAL6y9O@cluster0.edx3m0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace 'my_database' with your preferred database name.

const connectDB = async () => {
  try {
      await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
  }
};

module.exports = connectDB;
