import ICMSFormInput from "@/lib/interfaces/CMSFormInput"
import CMSFormInput from "./input"
import InputType from "@/lib/enums/InputType"
import AppUser from "@/lib/interfaces/AppUser"

const verticalAlignmentStyle: Record<'bottom' | 'center' | 'top', string> = {
    bottom: "mt-auto justify-end",
    center: 'my-auto justify-center',
    top: "mb-auto justify-start",
}

const horizontalAlignmentStyle: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-center ml-auto'
}

const labelStyles: Record<InputType, string> = {
    [InputType.profileimage]: 'pb-2',
    [InputType.text]: "",
    [InputType.name]: "",
    [InputType.email]: "",
    [InputType.textarea]: ""
}

const fieldStyles: Record<InputType, string> = {
    [InputType.profileimage]: 'w-min text-center',
    [InputType.text]: "",
    [InputType.name]: "",
    [InputType.email]: "",
    [InputType.textarea]: ""
}

const CMSFormField = ({
    input,
    user,
    defaultValues
}: {
    input: ICMSFormInput,
    user?: AppUser,
    defaultValues?: {
        [inputName: string]: string
    }
}) => {
    return <fieldset
        className={`h-full flex flex-col grow 
            ${fieldStyles[input.type]}
            ${verticalAlignmentStyle[
            input.verticalAlign || 'top'
            ]} ${horizontalAlignmentStyle[
            input.horizontalAlignment || 'left'
            ]}`}>
        <label className={"text-xs text-foreground " + labelStyles[input.type]}>
            {input.label}
        </label>
        <CMSFormInput input={input} defaultValues={defaultValues} user={user} />
    </fieldset>
}

export default CMSFormField