/* eslint-disable @typescript-eslint/no-explicit-any */

class MongoFilter {
    filter(item: any, property: string) {
        const self = this as any
        const matcher = self[property]
        const value = item[property]
        if (!!value)
        {
            if (typeof value == 'object'
                && matcher?.includes!(value))
            {
                return item
            }
            if (matcher == value)
            {
                return item
            }
        }
    }
}

export default MongoFilter