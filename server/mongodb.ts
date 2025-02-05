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

    const startTime = Date.now();

    try
    {
        await mongoose.connect(process.env.MONGO_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);
        console.log(`✅ Connected to MongoDB in ${Date.now() - startTime}ms`);
    } catch (error)
    {
        console.error("❌ MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};
