import TimeLogger from "@/utils/TimeLogger";
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
        const timer = new TimeLogger()
        await mongoose.connect(this.mongoUrl!, defaultMongoConfig);
        timer.log()
    }
}
export default MongoConnection
