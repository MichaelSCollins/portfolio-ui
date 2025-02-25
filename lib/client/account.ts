import axios, { AxiosResponse } from "axios";
import AppUser from "../interfaces/AppUser";
import { cookies } from "next/headers";


class AccountClient {
    static instance: AccountClient
    static async getServerSideMe() {
        const cookieStore = await cookies()
        const token = cookieStore.get("token")?.value
        const {
            data: user,
            status
        } = await AccountClient.me(token)
        console.log({ status })
        return user
    }
    static async me(token?: string) {
        if (!AccountClient.instance)
        {
            AccountClient.instance = new AccountClient();
        }
        return await AccountClient.instance.me(token);
    }
    async me(token?: string): Promise<AxiosResponse<AppUser | undefined>> {

        if (!token)
            return {
                status: 401,
                statusText: "Unauthorized"
            } as AxiosResponse<AppUser | undefined>

        const mePath = "/account/me"
        if (!process.env.ACCOUNT_MICRO_API)
            throw new Error("ENV: ACCOUNT_MICRO_API is not defined")
        const url = process.env.ACCOUNT_MICRO_API + mePath
        return await axios.get<AppUser>(url, {
            headers: { Authorization: `Bearer ${token}` }
        })
        // .catch(e => {
        //     console.error(e.message)
        //     return {
        //         status: e.statuse,
        //         statusText: e.message
        //             || "Internal Server Error"
        //     } as AxiosResponse<AppUser | undefined>
        // })
    }
}

export default AccountClient