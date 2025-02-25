/* eslint-disable @typescript-eslint/no-explicit-any */
import TimeLogger from "@/lib/logger/TimeLogger";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const thankYouPath = '/thank-you'
const errorMsg = "Fail"

class NextFormAction {
    static instance: NextFormAction;
    static async run(formData: FormData) {
        if (!NextFormAction.instance)
        {
            NextFormAction.instance = new NextFormAction()
        }
        return await NextFormAction.instance.run(formData)
    }
    static setUrl(properties: string) {
        if (!NextFormAction.instance)
        {
            NextFormAction.instance = new NextFormAction()
        }
        return NextFormAction.instance.setUrl(properties)
    }
    errorCallback: (e: unknown) => void = (e) => { throw e }
    url = '/'
    properties = ['id']
    fileProperties: string[] = []
    action?: string
    parsedBody?: any = {}
    setAction(action: string) {
        this.action = action
        return this
    }
    setImageInputs(properties: string[]) {
        this.fileProperties = properties
        return this
    }
    async run(formData: FormData) {
        const logger = new TimeLogger()
        this.parseForm(formData)
        try
        {
            console.log(this.url, this.parsedBody)
            const response = await axios.post(
                this.url, this.parsedBody
            )
            switch (response?.status)
            {
                case 200:
                case 201:
                case 203:
                    if (this.action === "login")
                    {
                        const c = await cookies()
                        c.set("token", response.data)
                    }// Set the token in cookies
                    logger.log("Create Message Action: ");
                    redirect(thankYouPath + '?action=' + this.action); // Redirect after success
                    break;

                default:
                    logger.addToMessage(`[${errorMsg}]: ${JSON.stringify(response)}`).log()
                    this.errorCallback(
                        new Error("Invalid Response."))
                    break;
            }
        } catch (e)
        {
            if (!this.errorCallback)
                throw e
            this.errorCallback!(e)
        }
    }
    setProperties(properties: string[]) {
        this.properties = properties
        return this
    }
    setUrl(url: string) {
        this.url = url
        return this
    }
    parseForm(formData: FormData) {
        const parsedBody = {} as any
        this.properties.forEach(property =>
            parsedBody[property] =
            formData.get(property))
        if (this.fileProperties.length <= 0)
        {
            this.parsedBody = parsedBody
            return this;
        }
        const requestData = new FormData();
        // Make it easier to read files in Spring Boot
        // Extract text-based fields
        const jsonObject: Record<string, any> = {};
        formData.forEach((value, key) => {
            if (typeof value === "string")
            {
                jsonObject[key] = value;
            }
        });
        requestData.append(
            "request",
            new Blob([JSON.stringify(jsonObject)], { type: "application/json" })
        );
        // Add file properties to the parsed body
        // So they can be easily annotated in Spring Boot 
        // controller.
        this.fileProperties.forEach(property =>
            requestData.append(
                property,
                formData.get(property) as File
            ))
        this.parsedBody = requestData
        return this;
    }
    onError(callback: (e: unknown) => void) {
        this.errorCallback = callback
        return this
    }
}

export default NextFormAction