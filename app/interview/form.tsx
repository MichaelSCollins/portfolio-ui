import { BiCalendarCheck } from "react-icons/bi";

const inputs = [
    {
        label: "Date / Time:",
        name: "time",
        type: "datetime"
    },
    {
        label: "Location:",
        name: "location",
        type: "text"
    },
    {
        label: "Meeting Topic:",
        name: "topic",
        type: "type"
    },
    {
        label: "Requested Documents/Information:",
        name: "requestInfo",
        type: "type"
    },
    {
        label: "Meeting Documents:",
        name: "docs",
        type: "documents"
    },
]

const InterviewForm = () => {
    return <form className="grid grid-cols-2 ">
        {inputs.map((input, i) => {
            const width = (i > 2
                ? 'width-full'
                : '') + '  p-4 flex flex-col'
            return i > 2
                ? <fieldset key={i} className={width}>
                    <label htmlFor={input.name}>
                        {input.label}
                    </label>
                    <input
                        className="bg-secondary/50 p-1 border rounded-sm "
                        name={input.name}
                        type={input.type}>
                    </input>
                </fieldset>
                : <fieldset key={i} className={width}>
                    <label htmlFor={input.name}>
                        {input.label}
                    </label>
                    <input
                        className="bg-secondary/50 p-1 border rounded-sm "
                        name={input.name}
                        type={input.type}>
                    </input>
                </fieldset>
        })}
        <button type="submit" className="bg-primary rounded-full m-auto p-4 flex text-lg">
            <BiCalendarCheck className="pb-1 text-4xl" /><span className="pt-1">Book Meeting</span>
        </button>
    </form>
}

export default InterviewForm