import Hero from '@/components/hero/Hero';
import bgSymbols from './bg-symbols.json'
import UILayers from '@/components/Layers/UILayers';
import PortfolioPage from '@/lib/enums/PortfolioPage';
import { OverlayAnchors } from '@/lib/enums/OverlayDirection';
import ImageData from "@/lib/interfaces/ImageData";
import { useCMS } from "@/hooks/useCMS";
import Image from "next/image";
import ContactForm from './form';

const page = PortfolioPage.CONTACT;

const ContactPage = () => {
    const { getString } = useCMS()
    const title = getString('contact.title')
    const subtitle = getString('contact.subtitle')
    const image: ImageData = {
        src: "/img/page-content/blue-guy-2.png",
        anchor: OverlayAnchors.BOTTOM_LEFT,
        width: 750,
        height: 600,
        alt: 'overlay-image'
    };
    return (
        <section
            className={`
                px-10
                mt-12
                w-full
                h-full
                flex
                flex-col
                justify-center
            `}
        >
            <UILayers
                bgSymbols={bgSymbols}
                page={page}
            >
                <div className="w-full flex max-sm:flex-col sm:justify-around">
                    <div className="flex flex-col w-full h-full">
                        <div className="absolute">
                            <Hero {...{ title, subtitle, page, }} hideButtons />
                        </div>
                        <Image {...image} className="" alt={image.alt} />
                    </div>
                    <ContactForm />
                </div>
            </UILayers>
        </section>
    );
};

export default ContactPage;