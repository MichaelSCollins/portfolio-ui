"use server";

import NextFormAction from "@/../server/action/base-action";

const defaultEnvUrl = 'http://localhost:3000'

export const createMessageAction = async (formData: FormData) => {
    "use server"
    const url = process.env.BASE_URL + '/api/messages'
        || defaultEnvUrl + '/api/messages'
    return NextFormAction
        .parseFormInputs([
            'name', 'email', 'content'
        ])
        .setUrl(url)
        .run(formData)
}