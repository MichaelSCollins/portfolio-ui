import MessageController from "@/server/controllers/message-controller";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    MessageController.handler(req, res)
}

export default await handler