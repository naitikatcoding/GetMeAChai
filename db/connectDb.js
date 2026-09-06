import mongoose from "mongoose";
import dns from "dns";

// Ensure MongoDB SRV queries resolve reliably on all environments (especially Windows)
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (dnsErr) {
  // Ignore in environments where setServers is restricted
}

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection;
    }

    const mongoUri = (process.env.MONGO_URI || "").trim();
    if (!mongoUri) {
      throw new Error("MONGO_URI environment variable is not defined or empty.");
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDb;
