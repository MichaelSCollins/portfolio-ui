import { IMessage } from '../models/message'
import MongoFilter from "./MongoFilter"
interface MessageFilterProperties {
    name: string | string[] | undefined,
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
            .setName(filterProperties.name)
            .setEmail(filterProperties.email)
            .filter
    }
    private name: string | string[] | undefined = undefined
    private email: string | string[] | undefined = undefined
    constructor(
    ) {
        super()
    }
    setName(name: string | string[] | undefined) {
        this.name = name
        return this;
    }
    setEmail(email: string | string[] | undefined) {
        this.email = email
        return this;
    }
    override filter(item: IMessage) {
        if (!this.name && !this.email)
        {
            return item
        }
        return super.filter(item, 'name')
            || super.filter(item, 'email')
    }
}

export default MessageFilter