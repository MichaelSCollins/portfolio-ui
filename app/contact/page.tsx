import bgSymbols from './bg-symbols.json'
import UILayers from '@/components/layers/UILayers';
import PortfolioPage from '@/lib/enums/PortfolioPage';
import { OverlayAnchors } from '@/lib/enums/OverlayDirection';
import ImageItem from "@/lib/interfaces/ImageData";
import { useCMS } from "@/hooks/useCMS";
import CMSForm from '@/components/form/form';
import { createMessageAction } from './action';
import HeroImageLayout from '@/components/layouts/HeroImageLayout';
// import AccountClient from '@/lib/client/account';

const page = PortfolioPage.CONTACT;

const ContactPage = async () => {
    const { getString } = useCMS()
    // const user = await AccountClient.getServerSideMe()
    const title = getString('contact.title')
    const subtitle = getString('contact.subtitle')
    const image: ImageItem = {
        src: "/img/page-content/blue-guy-2.png",
        anchor: OverlayAnchors.BOTTOM_LEFT,
        width: 750,
        height: 600,
        alt: 'overlay-image'
    };
    return (
        <section className={`flex flex-col 
            justify-center w-full h-full
            px-10 mt-12`}>
            <UILayers
                bgSymbols={bgSymbols}
                page={page}
                serverContent={<HeroImageLayout
                    {...{ title, subtitle, image, page }}
                >
                    <CMSForm
                        moduleKey={"contact"}
                        user={undefined}
                        action={createMessageAction} />
                </HeroImageLayout>}>
            </UILayers>
        </section>
    );
};

export default ContactPage;