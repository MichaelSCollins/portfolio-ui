"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const defaultEnvUrl = 'http://localhost:3000'
const contactSuccessPath = '/thank-you'
const errorMsg = "Failed to send message."

export const createMessageAction = async (formData: FormData) => {
    "use server"
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
        || defaultEnvUrl;
    const response = await axios.postForm(
        baseUrl + '/api/messages', formData
    ).catch(console.error);

    switch (response?.status)
    {
        case 200:
        case 201:
        case 203:
            redirect(contactSuccessPath); // Redirect after success
            break;

        default:
            console.error(errorMsg, response);
            break;
    }
}