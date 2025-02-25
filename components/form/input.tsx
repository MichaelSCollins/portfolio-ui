import InputType from "@/lib/enums/InputType"
import ICMSFormInput from "@/lib/interfaces/CMSFormInput"
import ProfileImageUpload from "../image/ProfileImageUploader"
import AppUser from "@/lib/interfaces/AppUser"

const CMSFormInput = ({ input, defaultValues = undefined, user = undefined }: {
    input: ICMSFormInput,
    user?: AppUser,
    defaultValues?: { [name: string]: string }
}) => {
    const name = input.name
    let defaultValue = undefined;
    if (name
        && defaultValues
        && defaultValues![name])
    {
        defaultValue = defaultValues![name]
    }

    if (user)
    {
        if (input.isPersonalData && user && user.personalInfo)
        {
            defaultValue = (user.personalInfo as {
                [name: string]: string
            })[name]
        }
    }
    switch (input.type)
    {
        case InputType.profileimage:
            return <ProfileImageUpload
                input={input} />
        case InputType.textarea:
            return <textarea
                name={input.name}
                rows={9}
                className={`
                    text-xs p-2 basis-full
                    bg-secondary text-foreground
                    max-sm:bg-secondary/70  
                    rounded shadow-md shadow-background
                `}
                disabled={input.isPersonalData}
                defaultValue={defaultValue}
                placeholder={input.placeholder}
            />
        default:
            return <input id={input.name}
                name={input.name}
                type={input.type}
                defaultValue={defaultValue}
                disabled={input.isPersonalData}
                placeholder={input.placeholder}
                className={`text-xs w-full p-2
                          bg-secondary text-foreground
                            rounded shadow-md border border-2 border-foreground/15
                            shadow-background`} />
    }
}

export default CMSFormInput