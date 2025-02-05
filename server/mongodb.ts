import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string
    ?? "mongodb+srv://codebigthings:4friends@portfolio-messages.emwze.mongodb.net/";

if (!MONGODB_URI)
{
    throw new Error("Please define the MONGODB_URI environment variable");
}

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1)
    {
        console.log("✅ Using existing MongoDB connection");
        return;
    }

    try
    {
        console.log("🌍 Connecting to MongoDB...");
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // ⏳ Wait max 5s before failing
        });
        console.log("✅ Connected to MongoDB");
    } catch (error)
    {
        console.error("❌ MongoDB Connection Error:", error);
        throw new Error("Failed to connect to database");
    }
};
