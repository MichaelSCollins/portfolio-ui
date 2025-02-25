/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import GoogleAnalytics from "@/lib/analytics/google"
import { NextApiRequest, NextApiResponse } from "next"
export interface IController {
    req?: NextApiRequest
    res?: NextApiResponse
    handler: Function
    setReqRes: Function
}
class NextApiController implements IController {
    req?: NextApiRequest
    res?: NextApiResponse
    setReqRes(
        req: NextApiRequest,
        res: NextApiResponse
    ) {
        this.req = req
        this.res = res
        return this
    }
    async handler(
    ): Promise<void> {
        const action = this.req!.method?.toLowerCase() as keyof this;
        return await (this[action] as Function).call(this);
    }
}

export default NextApiController