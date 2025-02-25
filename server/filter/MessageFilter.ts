import { IMessage } from '../models/message'
import MongoFilter from "./MongoFilter"
interface MessageFilterProperties {
    email: string | string[] | undefined
}
class MessageFilter extends MongoFilter {
    static instance?: MessageFilter
    static build(filterProperties: MessageFilterProperties) {
        if (!this.instance)
        {
            this.instance = new MessageFilter()
        }
        return this.instance
            .setEmail(filterProperties.email)
            .filter
    }
    private subject: string | string[] | undefined = undefined
    private email: string | string[] | undefined = undefined
    constructor(
    ) {
        super()
    }
    setSubject(subject: string | string[] | undefined) {
        this.subject = subject
        return this;
    }
    setEmail(email: string | string[] | undefined) {
        this.email = email
        return this;
    }
    override filter(item: IMessage) {
        if (!this.subject && !this.email)
        {
            return item
        }
        return super.filter(item, 'subject')
            || super.filter(item, 'email')
    }
}

export default MessageFilter