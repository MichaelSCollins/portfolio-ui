import { NextApiRequest, NextApiResponse } from "next";
import Message from '@/server/models/message'

const postMessage = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("post")
    const { email, name, content } = req.body

    if (!email || !name || !content)
    {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newMessage = new Message({ email, name, content, timeSent: Date.now() });
    await newMessage.save();

    return res.status(201).json({ message: "Message saved successfully!" });
}

export default postMessage