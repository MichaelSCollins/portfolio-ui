import { useCMS } from "@/hooks/useCMS";
import CMSFormFieldGroup from "./field-group";
import AppButton, { GotoButton } from "../buttons/AppButton";
import NextJSFormAction from "@/lib/interfaces/NextJSFormAction.";
import ICMSFormInput from "@/lib/interfaces/CMSFormInput";
import AppUser from "@/lib/interfaces/AppUser";

type CMSdefaultValues = { [name: string]: string }

const CMSForm = ({
    defaultValues,
    moduleKey,
    action,
    user
}: {
    action: NextJSFormAction,
    moduleKey: string,
    user?: AppUser,
    defaultValues?: CMSdefaultValues
}) => {
    const { getObj } = useCMS();
    const inputs = getObj<ICMSFormInput[]>(
        moduleKey + '.form.inputs'
    );
    const fullWidthInputs = getObj<ICMSFormInput[]>(
        moduleKey + '.form.fullWidthInputs'
    );
    if (!inputs && !fullWidthInputs)
        console.warn("Missing inputs from content.json")
    return (
        <form
            action={action}
            className={`px-4
                        z-10
                        sm:w-full
                        flex flex-col gap-4 justify-center`} >
            {inputs && <CMSFormFieldGroup
                inputs={inputs}
                defaultValues={defaultValues} />}
            {fullWidthInputs && <CMSFormFieldGroup
                inputs={fullWidthInputs}
                cols={1}
                user={user}
                defaultValues={defaultValues} />}
            <div className="grid grid-cols-2 items-stretch *:w-full *:px-1">
                <AppButton
                    variant="primary"
                    type='submit'
                    icon="send">
                    Login
                </AppButton>
                <GotoButton
                    variant="secondary"
                    type='submit'
                    goto="/account/register"
                    icon="user">
                    Sign Up
                </GotoButton>
            </div>
        </form>
    );
};

export default CMSForm;