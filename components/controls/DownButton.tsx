"use client"

import { useLoadedContext } from "@/hooks/useLoadedContext";
import fadeInLoadingAnimation from "@/lib/animations/fadeInAnimation";
import Link from "next/link";
import { RxArrowDown } from "react-icons/rx";

const DownButton = () => {
    const { isLoaded } = useLoadedContext()
    return <div style={
        fadeInLoadingAnimation(isLoaded)
    } className={`absolute bottom-16 left-1/4 
        max-md:p-4 p-8 px-7
        max-md:left-4 max-md:bottom-4 
        bg-secondary text-foreground 
        animate-bounce hover:animate-pulse`}><Link
            href="/about"
        >
            <RxArrowDown className="text-4xl cursor-pointer " />
        </Link></div>
}

export default DownButton;