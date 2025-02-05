import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/server/mongodb";
import Message from "@/server/models/message";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(
        "connecting to DB..."
    )
    await connectDB(); // Connect to MongoDB
    switch (req.method)
    {
        case "POST":
            try
            {
                return await post(req, res)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any)
            {
                return res.status(500).json({ error: "Server error " + e.message });
            }
            break;
        default:
            return res.status(405).json({ error: "Method not allowed" });
    }
}
const post = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("post", req.body)
    const { email, name, content } = req.body

    if (!email || !name || !content)
    {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newMessage = new Message({ email, name, content, timeSent: Date.now() });
    await newMessage.save();

    return res.status(201).json({ message: "Message saved successfully!" });
}