import Link from "next/link";
import { RxArrowUp } from "react-icons/rx";

const UpButton = () => <Link href="/" className={`
    mx-4
    h-min
    p-4  
    bg-secondary text-foreground 
    cursor-pointer animate-bounce hover:animate-pulse 
    z-50`}>
    <RxArrowUp className="text-2xl max-sm:text-md" />
</Link>

export default UpButton;