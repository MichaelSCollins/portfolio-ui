import { MdSend } from "react-icons/md";
import Hero from '@/components/hero/Hero';
import bgSymbols from './bg-symbols.json'
import OverlayLayers from '@/components/Layers/OverlayLayers';
import PortfolioPage from '@/enums/PortfolioPage';
import { OverlayAnchors } from '@/enums/OverlayDirection';
import FadeInImage from "@/interfaces/FadeInImage";
import { useCMS } from "@/hooks/useCMS";

enum InputTypes {
    text = 'text',
    name = 'name',
    email = 'email',
    textarea = 'textarea'
}

const page = PortfolioPage.CONTACT;

const ContactPage = () => {
    const { getString } = useCMS()
    const title = getString('contact.title')
    const subtitle = getString('contact.subtitle')
    const image: FadeInImage = {
        src: "/img/page-content/blue-guy-2.png",
        anchor: OverlayAnchors.BOTTOM_LEFT,
        width: 750,
        height: 600,
        alt: 'overlay-image'
    };
    return (
        <section
            className={`
                w-full
                flex
                justify-between
            `}
        >
            <OverlayLayers
                bgSymbols={bgSymbols}
                image={image}
                page={PortfolioPage.CONTACT}
            >
                <div className="h-min-screen flex max-sm:flex-col sm:justify-between">
                    <Hero {...{ title, subtitle, page }} hideButtons />
                    <ContactForm />
                </div>
            </OverlayLayers>
        </section>
    );
};

const ContactForm = () => {
    const { getObj } = useCMS();
    const inputs = getObj<any[]>('contact.form.inputs');
    const fullWidthInputs = getObj<any[]>('contact.form.fullWidthInputs');
    return (
        <form
            className={`
                px-4
                z-50
                flex flex-col gap-4 justify-center
            `}
        >
            <div className="grid grid-cols-2 gap-4">
                {inputs?.map((input, i) => (
                    <fieldset className={"flex flex-col grow"} key={i}>
                        <label className="text-xs mb-2 text-foreground">{input.label}</label>
                        {input.type === InputTypes.textarea ? (
                            <textarea
                                rows={9}
                                className={`
                                    text-xs p-2 basis-full
                                    bg-secondary text-foreground
                                    max-sm:bg-secondary/70  
                                    rounded shadow-md shadow-background
                                `}
                                placeholder="What did you have in mind?"
                            />
                        ) : (
                            <input
                                type={input.type}
                                placeholder={input.placeholder}
                                className={`
                                    text-xs w-full p-2
                                    bg-secondary text-foreground
                                    rounded shadow-md shadow-background
                                `}
                            />
                        )}
                    </fieldset>
                ))}
            </div>
            <div className="grid grid-col gap-4">
                {fullWidthInputs?.map((input, i) => (
                    <fieldset className={"flex flex-col grow"} key={i}>
                        <label className="text-xs mb-2 text-foreground">{input.label}</label>
                        {input.type === InputTypes.textarea ? (
                            <textarea
                                rows={9}
                                className={`
                                    text-xs p-2 basis-full
                                    bg-secondary text-foreground
                                    max-sm:bg-secondary/70  
                                    rounded shadow-md shadow-background
                                `}
                                placeholder="What did you have in mind?"
                            />
                        ) : (
                            <input
                                type={input.type}
                                placeholder={input.placeholder}
                                className={`
                                    text-xs w-full p-2
                                    bg-secondary text-foreground
                                    rounded shadow-md shadow-background
                                `}
                            />
                        )}
                    </fieldset>
                ))}
            </div>
            <button
                type="submit"
                className={`
                    bg-primary max-md:ml-auto justify-center
                    flex gap-1 text-nowrap w-1/2 max-sm:w-2/3
                    text-shadow text-foreground rounded-2xl
                    max-md:mt-3 shadow-lg shadow-background px-2 py-1.5
                `}
            >
                Send Message
                <MdSend className="mt-1" />
            </button>
        </form>
    );
};

export default ContactPage;