/* eslint-disable @typescript-eslint/no-explicit-any */
import TimeLogger from "@/lib/logger/TimeLogger";
import axios from "axios";
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
    static parseFormInputs(properties: string[]) {
        if (!NextFormAction.instance)
        {
            NextFormAction.instance = new NextFormAction()
        }
        return NextFormAction.instance.setProperties(properties)
    }
    errorCallback: (e: unknown) => void = (e) => { throw e }
    url = '/'
    properties = ['id']
    parsedBody?: any = {}
    async run(formData: FormData) {
        const logger = new TimeLogger()
            .setMessage("Create Message Action: ")
        this.parseForm(formData)
        try
        {
            const response = await axios.post(
                this.url, this.parsedBody
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
        this.properties.forEach(property =>
            this.parsedBody[property] =
            formData.get(property))

    }
    onError(callback: (e: unknown) => void) {
        this.errorCallback = callback
        return this
    }
}

export default NextFormAction