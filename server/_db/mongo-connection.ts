import TimeLogger from "@/lib/logger/TimeLogger";
import mongoose from "mongoose";

const defaultMongoUrl = "mongodb+srv://codebigthings:4friends@portfolio-messages.emwze.mongodb.net/"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultMongoConfig: any = {
    serverApi: {
        strict: true,
        deprecationErrors: true,
        version: '1'
    }
}

const mongoUrl: string = process.env.MONGODB_URI
    || defaultMongoUrl;
let instance: MongoConnection;
class MongoConnection {
    static async connect() {
        if (!instance)
            instance = new this()
        return await instance.connect()
    }
    static async end() {
        if (!instance)
            instance = new this()
        return await instance.end()
    }

    async connect() {
        if (mongoose.connection.readyState >= 1)
        {
            console.log("✅ Using existing MongoDB connection");
            return;
        }
        if (!process.env.MONGODB_URI)
        {
            console.error("Please define the MONGODB_URI environment variable");
        }
        const timer = new TimeLogger()
        await mongoose.connect(mongoUrl!, defaultMongoConfig);
        timer.log("[MongoDB] Connection in ")
    }

    async end() {
        return await mongoose.disconnect()
    }
}
export default MongoConnection
