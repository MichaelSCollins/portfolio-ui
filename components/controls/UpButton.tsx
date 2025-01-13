import Link from "next/link";
import { RxArrowUp } from "react-icons/rx";

const UpButton = () => <Link href="/" className="absolute max-md:left-4 max-md:top-4 bg-secondary text-foreground cursor-pointer p-8 px-7 max-md:p-4 left-48 max-lg:left-20 top-12 animate-bounce hover:animate-pulse z-50">
    <RxArrowUp className="text-4xl cursor-pointer " />
</Link>

export default UpButton;