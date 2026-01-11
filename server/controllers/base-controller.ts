/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import TimeLogger from "../../lib/logger/TimeLogger";
import { NextApiRequest, NextApiResponse } from "next";

class ApiController {
    static instance: any;
    static async handler(
        req: NextApiRequest,
        res: NextApiResponse) {
        if (!ApiController.instance) {
            ApiController.instance = new ApiController()
        }
        return await ApiController.instance.handler(req, res)
    }
    constructor() {
        console.log(
            "connecting to DB... " + process.env.MONGODB_URI
        );
        // Ensure the connection string is correct
        const mongoUri = process.env.MONGODB_URI
        if (!mongoUri) {
            throw new Error("MongoDB URI is not defined or incorrect");
        }
        // ...existing code to connect to MongoDB...
    }
    async handler(req: NextApiRequest, res: NextApiResponse) {
        try {
            const logger = new TimeLogger()
            if (!req.method) {
                throw "No HTTP Method Provided."
            }
            const self = this as ApiController & any
            const method = '_' + req.method?.toLowerCase()
            console.log(
                method + ": ", process.env.BASE_URL
            )
            console.log({ self: self[method] })
            const response = await self[method](req, res)
            logger.log("[$t] Created Message finished.", response)
            res.status(200).json(response); // Ensure response is sent back
        } catch (e: any) {
            this.onError(e, res) // Pass res to onError
        }
    }
    onError(e: any, res: NextApiResponse) {
        console.error(e)
        res.status(500).json({ error: e.message || 'Internal Server Error' }); // Send error response
    }
    async _get(
        req: NextApiRequest,
        res: NextApiResponse) { }
    async _post(
        req: NextApiRequest,
        res: NextApiResponse) { }
    async _put(
        req: NextApiRequest,
        res: NextApiResponse) { }
    async _patch(
        req: NextApiRequest,
        res: NextApiResponse) { }
    async _delete(
        req: NextApiRequest,
        res: NextApiResponse) { }
}

export default ApiController