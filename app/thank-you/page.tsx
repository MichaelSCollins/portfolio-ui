import { useCMS } from "../../hooks/useCMS";
import Link from "next/link";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";

export default function About() {
  const { getString } = useCMS()
  const title = getString('thanks.title')
  const subtitle = getString('thanks.subtitle')
  return (
    <section
      className={`
                px-8
                w-full
                flex
                flex-col
            `}
    >
      <div className="mt-32 bg-secondary/25 shadow-lg cursor-pointer drop-shadow-lg mx-auto p-4 border max-sm:flex-col text-right flex sm:justify-center">
        <div className="flex flex-col mr-4 text-nowrap">
          <b>
            <h2 className="text-primary text-3xl">{title}</h2>
          </b>
          <p className="text-foreground text-xl">{subtitle}</p>
        </div>
        <FaCheckCircle className="text-primary max-sm:mx-auto max-sm:mt-4 text-6xl" />
      </div>
      <Link className="mx-auto pt-12 flex gap-2 hover:text-primary" href={'/'}>Go Home <FaChevronRight className="mt-1" /></Link>
    </section >
  );
}
