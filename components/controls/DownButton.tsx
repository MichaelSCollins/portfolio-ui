import Link from "next/link";
import { RxArrowDown } from "react-icons/rx";

const DownButton = () => <Link href="/about" className="absolute max-md:left-4 max-md:bottom-4 bg-secondary text-foreground cursor-pointer p-8 px-7 max-md:p-4 left-48 max-lg:left-20 bottom-12 animate-bounce hover:animate-pulse z-50">
    <RxArrowDown className="text-4xl cursor-pointer " />
</Link>

export default DownButton;