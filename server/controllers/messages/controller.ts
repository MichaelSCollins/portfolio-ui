/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ApiController from "../base-controller";
import getMessages from "./_get";
import postMessage from './_post'

class MessagesController extends ApiController {
    override _get = getMessages
    override _post = postMessage
}

export default MessagesController
