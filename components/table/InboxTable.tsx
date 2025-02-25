import { IMessage } from "@/server/models/message"
import { FaEdit, FaTrash } from "react-icons/fa"

/* eslint-disable @typescript-eslint/no-explicit-any */
const InboxTable = ({ data }: { data: IMessage[] }) => {
    return <table>
        {data.map((data: IMessage) => {
            return <tr key={data.timeSent.toUTCString()}>
                <td>{data.timeSent.toLocaleTimeString()}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td className="flex justify-end">
                    <FaEdit />
                    <FaTrash />
                </td>
            </tr>
        })}
    </table>
}

export default InboxTable