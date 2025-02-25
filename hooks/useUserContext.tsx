"use client"
import AppUser from "@/lib/interfaces/AppUser";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface UserContextType {
    user?: AppUser;
    setUser: (value: AppUser) => void;
}

// Create the context with a default value of `undefined`
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the context safely
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context)
    {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

// Context Provider Component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AppUser | undefined>();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
