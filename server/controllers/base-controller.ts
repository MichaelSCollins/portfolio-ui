/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import TimeLogger from "@/utils/TimeLogger";
import { NextApiRequest, NextApiResponse } from "next";
import MongoConnection from "../_db/MongoConnectionBuilder";

class ApiController {
    static instance: any;
    static async handle(
        req: NextApiRequest,
        res: NextApiResponse) {
        if (!this.instance)
        {
            this.instance = new this()
        }
        return await this.instance.processRequest(req, res)
    }
    constructor() { }
    async processRequest(req: NextApiRequest, res: NextApiResponse) {
        try
        {
            const logger = new TimeLogger()
            console.log(
                "connecting to DB... " + process.env.NEXT_PUBLIC_MONGODB_URI
            )
            if (!req.method)
            {
                throw "No HTTP Method Provided."
            }
            const method = '_' + req.method?.toLowerCase()
            await MongoConnection.connect(); // Connect to MongoDB
            const self = this as ApiController & any

            console.log(
                method, process.env.BASE_URL
            )
            return await self[method](req, res)
            logger.log("[$t] Created Message finished.")
        } catch (e: any)
        {
            this.onError(e)
        }
    }
    onError(e: any) {
        console.error(e)
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