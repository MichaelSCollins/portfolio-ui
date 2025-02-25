import ICMSFormInput from "@/lib/interfaces/CMSFormInput";
import CMSFormField from "./field";
import AppUser from "@/lib/interfaces/AppUser";

const CMSFormFieldGroup = ({
    inputs,
    user,
    cols = 2,
    defaultValues
}: {
    inputs: ICMSFormInput[],
    user?: AppUser,
    cols?: number,
    defaultValues?: { [name: string]: string }
}) => {
    return (
        <div className={`grid grid-cols-${cols} gap-4`}>
            {inputs.map((input, i) => {
                return (
                    <CMSFormField key={i} input={input} user={user} defaultValues={defaultValues} />
                )
            })}
        </div>
    );
}
export default CMSFormFieldGroup