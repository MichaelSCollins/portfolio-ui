import MessagesController from "@/server/controllers/messages/controller";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest, res: NextApiResponse) {
    return await MessagesController.handle(req, res)
}