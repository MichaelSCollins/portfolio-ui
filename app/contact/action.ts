"use server";

import NextFormAction from "@/server/action/base-action";

const defaultEnvUrl = '/'

export const createMessageAction = async (formData: FormData) => {
    "use server"
    const url = process.env.BASE_URL + '/api/messages'
        || defaultEnvUrl + '/api/messages'
    return await NextFormAction
        .setUrl(url)
        .setProperties([
            'subject',
            'email',
            'content'
        ])
        .setAction("message")
        .run(formData)
}