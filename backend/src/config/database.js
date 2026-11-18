import mongoose from "mongoose";

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  await mongoose.connect(uri);

  const { host, name } = mongoose.connection;
  const where = uri.startsWith("mongodb+srv://") ? "Atlas" : "local";
  // Never log the uri itself: it contains the password
  console.log(`MongoDB connected (${where}): ${host}/${name}`);
}