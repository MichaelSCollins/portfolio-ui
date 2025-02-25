"use client"

import { useState } from "react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import AppUser from "@/lib/interfaces/AppUser";
import Cookies from "js-cookie";
import Link from "next/link";

const UserMenu = ({ user }: { user: AppUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            {/* User Profile Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
                {user?.profileImage
                    ? <Image
                        src={user.profileImage.serverUrl}
                        alt={`${user?.username}'s profile picture`}
                        width={32}
                        height={32}
                        className="rounded-full border border-gray-300 dark:border-gray-600" />
                    : <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>}
                <FaCaretDown className={`text-gray-600 dark:text-gray-300 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-secondary border border-secondary rounded-lg shadow-lg z-50">
                    <ul className="py-2 text-foreground-500">
                        <li className="px-4 py-2 hover:bg-primary/50 transition-colors cursor-pointer">
                            Profile
                        </li>
                        <li className="px-4 py-2 hover:bg-primary/50 transition-colors cursor-pointer">
                            <Link href="/inbox">Messages</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-primary/50 transition-colors cursor-pointer">Settings</li>
                        <li className="px-4 py-2 hover:bg-primary/50 transition-colors cursor-pointer"
                            onClick={async () => {
                                Cookies.remove('token')
                                window.location.href = '/';
                            }}>Logout</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserMenu;