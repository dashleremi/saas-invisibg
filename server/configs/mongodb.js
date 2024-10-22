import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // No need for useNewUrlParser or useUnifiedTopology
    mongoose.connection.on('connected', () => {
      console.log("Database Connected");
    });
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
