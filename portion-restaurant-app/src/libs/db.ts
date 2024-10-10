// src/libs/db.ts
import mongoose, { ConnectOptions } from "mongoose";

const connectMongo = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error: ${error}`);
    throw new Error("MongoDB connection failed");
  }
};

export default connectMongo;
