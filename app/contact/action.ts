"use server";

import SpeedLogger from "@/utils/SpeedLogger";
import axios from "axios";
import { redirect } from "next/navigation";

const defaultEnvUrl = 'http://localhost:3000'
const thankYouPath = '/thank-you'
const errorMsg = "Fail"

export const createMessageAction = async (formData: FormData) => {
    "use server"
    const logger = new SpeedLogger()
        .setMessage("Create Message Action: ")
    const body = {
        name: formData.get("name"),
        email: formData.get("email"),
        content: formData.get("content"),
    };
    const baseUrl = process.env.BASE_URL
        || defaultEnvUrl;
    const response = await axios.post(
        baseUrl + '/api/messages', body
    ).catch(console.error);

    switch (response?.status)
    {
        case 200:
        case 201:
        case 203:
            logger.speedLog();
            redirect(thankYouPath); // Redirect after success
            break;

        default:
            logger.addToMessage(` [${errorMsg}]: ${JSON.stringify(response)
                }`).speedLog()
            break;
    }
}