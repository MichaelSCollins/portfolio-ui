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
        <section className="flex max-md:flex-col max-md:px-16 max-md:top-0">
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
            <form className="absolute grid z-20 grid-col gap-4 max-md:mt-2 md:w-2/5 md:right-8 justify-center md:mt-24 max-md:top-72 max-md:mr-12">
                <div className="grid grid-cols-2 gap-4">
                    <fieldset className="flex flex-col">
                        <label className=" text-xs mb-2 text-foreground">Your Name</label>
                        <input
                            type="name"
                            placeholder="Name"
                            className={`text-xs w-full p-2
                            bg-secondary text-foreground 
                            rounded shadow-md`} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label className=" text-xs mb-2 text-foreground">Email</label>
                        <input
                            type="email"
                            placeholder="email@host.com"
                            className={`text-xs w-full p-2
                                    bg-secondary text-foreground 
                                    rounded shadow-md`} />
                    </fieldset>

                </div>
                <fieldset className="flex flex-col">
                    <label className=" text-xs mb-2 text-foreground">Your Message</label>
                    <textarea rows={9} className="text-xs p-2 bg-secondary text-foreground rounded shadow-md" placeholder="What did you have in mind?" />
                </fieldset>

                <button type="submit" className='bg-primary rounded-2xl max-md:mt-3 text-foreground px-12 py-2 border-secondary'>Send</button>
            </form>
        </section>
    );
};

export default ContactPage;