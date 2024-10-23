import mongoose from "mongoose";

const connectDB = async () => {
  // Set up event listener before attempting to connect
  mongoose.connection.on('connected', () => {
    console.log("Database Connected");
  });

  mongoose.connection.on('error', (err) => {
    console.error("MongoDB connection error:", err.message);
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000 // Optional: Helps with handling connection timeouts
    });
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
