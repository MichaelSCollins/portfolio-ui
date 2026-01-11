import Link from "next/link";
import { RxArrowDown } from "react-icons/rx";

const DownButton = () => <Link href="/about" className={`p-4
    h-min
    bg-secondary text-foreground 
    cursor-pointer animate-bounce hover:animate-pulse`}>
    <RxArrowDown className="text-4xl cursor-pointer " />
</Link>

export default DownButton;