import MongoFilter from "./MongoFilter"

class MessagFilter extends MongoFilter {
    name: string | string[] | undefined = undefined
    email: string | string[] | undefined = undefined
    constructor(
        name: string | string[] | undefined,
        email: string | string[] | undefined
    ) {
        super()
        this.name = name
        this.email = email
    }
    override filter(item: { [x: string]: string; }) {
        if (!this.name && !this.email)
        {
            return item
        }
        return super.filter(item, 'name')
            || super.filter(item, 'email')
    }
}

export default MessagFilter