import Link from "next/link";
import { RxArrowUp } from "react-icons/rx";

const UpButton = () => <Link href="/" className={`
    p-4 mx-4
    h-min
    bg-secondary text-foreground 
    max-sm:absolute max-sm:bottom-1/3 max-sm:ml-12 max-sm:mb-12
    cursor-pointer animate-bounce hover:animate-pulse 
    `}>
    <RxArrowUp className="text-2xl max-sm:text-md" />
</Link>

export default UpButton;