"use client"
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface LoadedContextType {
    isLoaded: boolean;
    setIsLoaded: (value: boolean) => void;
}

// Create the context with a default value of `undefined`
const LoadedContext = createContext<LoadedContextType | undefined>(undefined);

// Custom hook to use the context safely
export const useLoadedContext = () => {
    const context = useContext(LoadedContext);
    if (!context)
    {
        throw new Error("useLoadedContext must be used within a LoadedProvider");
    }
    return context;
};

// Context Provider Component
export const LoadedProvider = ({ children }: { children: ReactNode }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <LoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
            {children}
        </LoadedContext.Provider>
    );
};

export default LoadedContext;
