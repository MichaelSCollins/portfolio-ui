/* eslint-disable react/jsx-no-undef */
import PortfolioPage from "@/lib/enums/PortfolioPage";
import Hero from "../hero/Hero";
import { ReactNode } from "react";
import Image from "next/image";
import ImageTextItem from "@/lib/interfaces/ImageData";

const HeroImageLayout = ({
    title,
    subtitle,
    page,
    image,
    children
}: {
    title: string,
    subtitle: string,
    page: PortfolioPage,
    image: ImageTextItem,
    children: ReactNode[] | ReactNode
}) => <div className="w-full flex max-sm:flex-col sm:justify-around">
        <div className="flex flex-col max-md:w-full md:w-1/2">
            <div className="w-full">
                <Hero {...{ title, subtitle, page, }} hideButtons />
            </div>
            <Image {...image} className="max-sm:hidden w-full" alt={image.alt} />
        </div>
        {children}
    </div>

export default HeroImageLayout