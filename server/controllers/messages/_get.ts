/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import Message from '@/server/models/message'
import MessageFilter from "@/server/filter/MessageFilter";

const getMessages =
    async (req: NextApiRequest, res: NextApiResponse) => {
        console.log("get")
        const { id, name, email } = req.query
        const messageFilter = new MessageFilter(name, email)

        if (!!id)
            return Message.findById(id)
        if (!!email || !!name)
            return Message.find(messageFilter.filter)

        return res.status(201).json({
            message: "Message saved successfully!"
        });
    }

export default getMessages