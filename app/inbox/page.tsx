import { IoIosMailUnread } from "react-icons/io";
import AppMessage from '@/lib/interfaces/AppMessage';
import axios from 'axios';
import React from 'react';

const Inbox = async () => {
    const response = await axios.get('http://localhost:3000/api/messages', {
        data: { email: "michaelscollins.it@gmail.com" }
    });
    const data = await response.data.reverse();
    return (
        <div className="mx-24 p-4 ">
            <h1>Inbox</h1>
            <ul className="bg-secondary/20 border border-secondary rounded-lg">
                {data.map((message: AppMessage, index: React.Key | null | undefined) => (
                    <li key={index} className={`
                        flex justify-center
                        border-b first:border-t 
                        border-secondary 
                        *:hover:text-primary/50
                        p-4 hover:bg-secondary/50 cursor-pointer`}>
                        <div className="flex"><IoIosMailUnread className="text-primary mr-1 text-xl" />{(message.subject || message.name).substring(0, 12)}</div>
                        <div className="ml-auto">{message.timeSent?.toString()}...</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inbox;