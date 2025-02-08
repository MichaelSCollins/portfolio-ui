"use server";

import TimeLogger from "@/lib/logger/TimeLogger";
import axios from "axios";
import { redirect } from "next/navigation";

const defaultEnvUrl = 'http://localhost:3000'
const thankYouPath = '/thank-you'
const errorMsg = "Fail"

export const createMessageAction = async (formData: FormData) => {
    "use server"
    const logger = new TimeLogger()
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
    )

    switch (response?.status)
    {
        case 200:
        case 201:
        case 203:
            logger.log();
            redirect(thankYouPath); // Redirect after success
            break;

        default:
            logger.addToMessage(` [${errorMsg}]: ${JSON.stringify(response)
                }`).log()
            break;
    }
}