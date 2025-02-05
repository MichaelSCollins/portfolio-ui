"use server";

import { redirect } from "next/navigation";

export const createMessageAction = async (formData: FormData) => {
    "use server"
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        content: formData.get("content"),
    };
    console.log({ formData })
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL
        ?? 'http://localhost:3000' + '/api/messages', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (response.ok)
    {
        redirect("/thank-you"); // Redirect after success
    } else
    {
        console.error("Failed to send message.", response);
    }
}