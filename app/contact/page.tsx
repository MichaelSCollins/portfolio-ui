import { MdSend } from "react-icons/md";
import Hero from '@/components/hero/Hero';
import { SymbolId } from '@/components/Image/bg/symbols/SymbolStrategy';
import OverlayLayers from '@/components/Image/OverlayLayers';
import HeroPosition from '@/enums/HeroPosition';
import { OverlayAnchors } from '../page';

const title = "Got a project in"
const subtitle = "mind?"
const position = HeroPosition.CONTACT

const ContactPage = () => {
    return (
        <section className={`
            flex 
            max-md:flex-col max-md:px-9 max-md:ml-6 max-md:mt-20`}>
            <OverlayLayers
                bgSymbols={[
                    {
                        symbolId: SymbolId.Keyboard, position:
                            { top: '11%', right: '43%' }
                    }
                ]}
                anchor={OverlayAnchors.BOTTOM_LEFT} src="/img/page-content/blue-guy-2.png">
                <Hero {...{ title, subtitle, position }} hideButtons />
            </OverlayLayers>
            <ContactForm />
        </section>
    );
};

const ContactForm = () => {
    return <form className={`
        z-20
        md:w-3/5
        md:mr-24 md:mt-24
        grid grid-col gap-4 justify-center`}>
        <div className="grid grid-cols-2 gap-4">
            <fieldset className="flex flex-col">
                <label className=" text-xs mb-2 text-foreground">
                    Your Name
                </label>
                <input
                    type="name"
                    placeholder="Name"
                    className={`text-xs w-full p-2
                bg-secondary text-foreground 
                rounded shadow-md  shadow-background`} />
            </fieldset>
            <fieldset className="flex flex-col">
                <label className=" text-xs mb-2 text-foreground">Email</label>
                <input
                    type="email"
                    placeholder="email@host.com"
                    className={`text-xs w-full p-2
                        bg-secondary text-foreground 
                        rounded shadow-md  shadow-background`} />
            </fieldset>

        </div>
        <fieldset className="flex flex-col">
            <label className="text-xs mb-2 text-foreground">
                Your Message
            </label>
            <textarea rows={9} className={`
                text-xs p-2
                bg-secondary text-foreground
                max-sm:bg-secondary/70  
                rounded shadow-md shadow-background`} placeholder="What did you have in mind?" />
        </fieldset>

        <button type="submit" className='bg-primary max-md:ml-auto justify-center flex gap-1 text-nowrap  w-1/2 max-sm:w-2/3 text-shadow text-foreground rounded-2xl max-md:mt-3 shadow-lg shadow-background px-2 py-1.5 '>Send Message<MdSend className="mt-1" /> </button>
    </form>
}

export default ContactPage;