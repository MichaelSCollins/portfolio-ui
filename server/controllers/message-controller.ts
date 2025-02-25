import { NextApiRequest, NextApiResponse } from "next"
import MessageDBAdapter from "../adapters/MessageDBAdapter"
import NextApiController, { IController } from "./_base-controller"
import GoogleAnalytics from "@/lib/analytics/google"

class MessageController extends NextApiController implements IController {
    static instance?: IController
    async post(
    ) {
        GoogleAnalytics.send("api_message.post");
        const document = await MessageDBAdapter.toMongoDB(
            this.req!.body
        )
        if (!document)
        {
            GoogleAnalytics.send("api_message.post_error");
            this.res!.status(500).json("Failed to activate adapter....")
        }
        GoogleAnalytics.send("api_message.post_success");
        this.res!.status(200).json(document)
    }
    async get(
    ) {
        GoogleAnalytics.send("api_message.get");
        const document = await MessageDBAdapter.fromMongoDB(
            { email: "michaelscollins.it@gmail.com" }
        )
        if (!document)
        {
            GoogleAnalytics.send("api_message.get_error");
            this.res!.status(500).json("Failed to activate adapter....")
        }
        GoogleAnalytics.send("api_message.get_success");
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
        GoogleAnalytics.send("api_message");
        MessageController.instance
            .setReqRes(req, res)
            .handler()
    }
}

export default MessageController