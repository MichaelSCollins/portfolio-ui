"use server";

import NextFormAction from "@/server/action/base-action";

const defaultEnvUrl = process.env.ACCOUNT_API_URL
    ?? 'http://localhost:8080/api'

const formProperties = [
    'password',
    'confirmPassword',
    'phone',
    'name',
    'dateOfBirth',
    'username',
    'email',
    'password',
    'confirmPassword'
]

export const createAccountAction = async (formData: FormData) => {
    "use server"
    const url = defaultEnvUrl + '/account/register'

    return await NextFormAction
        .setUrl(url)
        .setProperties(formProperties)
        .setImageInputs(['profileImage'])
        .parseForm(formData)
        .setAction("register")
        .run(formData)
}
