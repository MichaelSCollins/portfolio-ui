"use server";

import NextFormAction from "@/server/action/base-action";

const defaultEnvUrl = process.env.ACCOUNT_API_URL ?? 'http://localhost:8080/api'

export const loginAction = async (formData: FormData) => {
    "use server"
    const url = defaultEnvUrl + '/account/login'
    return await NextFormAction
        .setUrl(url)
        .setAction("login")
        .setProperties([
            'email', 'password'
        ])
        .parseForm(formData)
        .run(formData)
}