import UserMenu from "./UserMenu"
import AnonMenu from "./AnonMenu"
import AccountClient from "@/lib/client/account"
import AppUser from "@/lib/interfaces/AppUser";
let user: AppUser | undefined;
const
    AccountMenu = async () => {
        try
        {
            user = await AccountClient.getServerSideMe()
        } catch (e)
        {
            if (e instanceof Error)
            {
                console.error(e.message);
            } else
            {
                console.error(e);
            }
        }
        console.log({ user })
        if (user)
        {
            return <UserMenu user={user} />
        }
        return <AnonMenu />
    }

export default AccountMenu