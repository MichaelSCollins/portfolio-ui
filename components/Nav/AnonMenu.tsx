"use client"

import { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import CMSForm from "../form/form";
import { loginAction } from "@/app/account/login/action";

const AnonMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <li className="cursor-pointer h-full w-full"
        >
            <button
                className="flex transition-transform duration-1000"
                onClick={() => setOpen(!open)}
            >
                Login {open
                    ? <FaCaretUp className="mt-1 transition-transform duration-1000" />
                    : <FaCaretDown className="mt-1 transition-transform duration-1000" />}
            </button>
            {open && <div
                className="absolute right-12 top-12 border-4 rounded-lg bg-background/95 
                     border-secondary shadow-lg p-5 w-72 z-50"
            >
                <CMSForm moduleKey="login" action={loginAction}
                    defaultValues={{}} />
            </div>}

        </li>
    );
};

export default AnonMenu;
