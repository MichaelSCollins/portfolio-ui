import { NextApiRequest, NextApiResponse } from "next"
import MessageDBAdapter from "../adapters/MessageDBAdapter"
import NextApiController, { IController } from "./_base-controller"

class MessageController extends NextApiController implements IController {
    static instance?: IController
    async post(
    ) {
        console.log("post")
        const document = await MessageDBAdapter.toMongoDB(
            this.req!.body
        )
        console.log(document)
        if (!document)
        {
            console.log(this.req!.body)
            this.res!.status(500).json("Failed to activate adapter....")
        }
        this.res!.status(200).json(document)
    }

    static handler = (
        req: NextApiRequest,
        res: NextApiResponse
    ) => {
        if (!MessageController.instance)
        {
            MessageController.instance = new MessageController()
        }
        MessageController.instance
            .setReqRes(req, res)
            .handler()
    }
}

export default MessageController