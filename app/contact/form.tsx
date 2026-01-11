/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCMS } from "../../hooks/useCMS";
import { MdSend } from "react-icons/md";
import { createMessageAction } from "./action";
import AlertDialog from "../../lib/components/Alert";

enum InputTypes {
    text = 'text',
    name = 'name',
    email = 'email',
    textarea = 'textarea'
}
export interface FormInput { name: string, type: InputTypes, label: string, placeholder: string }

const ContactForm = () => {
    const { getObj } = useCMS();
    const inputs = getObj<FormInput[]>('contact.form.inputs');
    const fullWidthInputs = getObj<FormInput[]>('contact.form.fullWidthInputs');
    if (!inputs) throw Error("Missing inputs from content.json")
    return (
        <form
            action={createMessageAction}
            className={`
                px-4
                z-50
                sm:w-full
                flex flex-col gap-4 justify-center
            `}
        >
            <div className="grid grid-cols-2 gap-4">
                {inputs?.map((input, i) => (
                    <fieldset className={"flex flex-col grow"} key={i}>
                        <label className="text-xs mb-2 text-foreground">{input.label}</label>
                        {input.type === InputTypes.textarea ? (
                            <textarea
                                name={input.name}
                                rows={9}
                                className={`
                                    text-xs p-2 basis-full
                                    bg-secondary text-foreground
                                    max-sm:bg-secondary/70  
                                    rounded shadow-md shadow-background
                                `}
                                placeholder="What did you have in mind?"
                            />
                        ) : (
                            <input
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                className={`
                                    text-xs w-full p-2
                                    bg-secondary text-foreground
                                    rounded shadow-md shadow-background
                                `}
                            />
                        )}
                    </fieldset>
                ))}
            </div>
            <div className="grid grid-col gap-4">
                {fullWidthInputs?.map((input, i) => (
                    <fieldset className={"flex flex-col grow"} key={i}>
                        <label className="text-xs mb-2 text-foreground">{input.label}</label>
                        {input.type === InputTypes.textarea ? (
                            <textarea
                                name={input.name}
                                rows={9}
                                className={`
                                    text-xs p-2 basis-full
                                    bg-secondary text-foreground
                                    max-sm:bg-secondary/70  
                                    rounded shadow-md shadow-background
                                `}
                                placeholder="What did you have in mind?"
                            />
                        ) : (
                            <input
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                className={`
                                    text-xs w-full p-2
                                    bg-secondary text-foreground
                                    rounded shadow-md shadow-background
                                `}
                            />
                        )}
                    </fieldset>
                ))}
            </div>
            {/* <button
                type="submit"
                className={`
                    bg-primary max-md:ml-auto justify-center
                    flex gap-1 text-nowrap w-1/2 max-sm:w-2/3
                    text-shadow text-foreground rounded-2xl
                    max-md:mt-3 shadow-lg shadow-background px-2 py-1.5
                `}
            >
                Send Message
                <MdSend className="mt-1" />
            </button> */}
            <AlertDialog
                alertTitle="Unfunded Project"
                alertContent={"Please hire at greater than 140k or invest in my Indie Game Dev Or Software Engineering Company to enable feature. Any contributions to my Music Event Company might lead to the servers getting turned back on for this as it's my favorite thing to do (code). :) Thank you guys for the love and support the past month has been hard for our family but we are determined. "}
                buttonGroup={{
                    primary: {
                        label: "Send",
                        autoFocus: true,
                    },
                }}
            >
                <MdSend className="mt-1" />
            </AlertDialog>
        </form>
    );
};
export default ContactForm;