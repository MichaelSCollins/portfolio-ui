import SpeedLogger from "@/utils/SpeedLogger";
import mongoose from "mongoose";

const defaultMongoUrl = "mongodb+srv://codebigthings:4friends@portfolio-messages.emwze.mongodb.net/"

class MongoConnection {
    private mongoUrl: string = process.env.NEXT_PUBLIC_MONGODB_URI
        || defaultMongoUrl;
    static async connect() {
        const builder = new this()
        return await builder.connect()
    }
    setUrl(url: string) {
        this.mongoUrl = url
        return this
    }
    async connect() {
        if (mongoose.connection.readyState >= 1)
        {
            console.log("✅ Using existing MongoDB connection");
            return;
        }
        if (!process.env.NEXT_PUBLIC_MONGODB_URI)
        {
            console.error("Please define the MONGODB_URI environment variable");
        }
        const logger = new SpeedLogger()
        await mongoose.connect(this.mongoUrl!, {
            dbName: "test"
        });
        logger.speedLog()
    }
}
export default MongoConnection
