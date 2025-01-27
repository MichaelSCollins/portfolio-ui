import { MdSend } from "react-icons/md";
import Hero from '@/components/hero/Hero';
import { SymbolId } from '@/components/Layers/bg/symbols/SymbolStrategy';
import OverlayLayers from '@/components/Layers/OverlayLayers';
import PortfolioPage from '@/enums/PortfolioPage';
import { OverlayAnchors } from '@/enums/OverlayDirection';
import FadeInImage from "@/interfaces/FadeInImage";
import HeroTailwindBuilder from "@/styles/HeroTwBuilder";
import { useCMS } from "@/hooks/useCMS";

enum InputTypes {
    text = 'text',
    name = 'name',
    email = 'email',
    textarea = 'textarea'
}

const title = "Got a project in"
const subtitle = "mind?"
const position = PortfolioPage.CONTACT
const ContactPage = () => {
    const image: FadeInImage = {
        src: "/img/page-content/blue-guy-2.png",
        anchor: OverlayAnchors.BOTTOM_LEFT,
        width: 750,
        height: 600,
        alt: 'overlay-image'
      }
    return (
        <><section className={`
            w-full
            flex 
            justify-between
            max-sm:my-auto max-sm:mx-1
            `}><OverlayLayers
                bgSymbols={[
                    {
                        symbolId: SymbolId.Keyboard, position: { top: '9%', right: '43%' }
                    }, {
                        symbolId: SymbolId.Mail,
                        position: {
                            bottom: '31%',
                            right: '15%'
                        }
                    }
                ]}
                image={image}
                page={PortfolioPage.CONTACT}>
                <div className="w-screen w-full h-min-screen h-full flex max-sm:flex-col max-sm:pl-2 sm:px-8 sm:justify-between">
                    <Hero {...{ title, subtitle, page: position }} hideButtons />
                    <ContactForm />
                </div>
            </OverlayLayers>
        </section ></>
    );
};

const ContactForm = () => {
    const { getObj } = useCMS()
    const inputs = getObj<any[]>('contact.form.inputs')
    return <form className={`
        z-50
        w-full
        md:ml-12
        grid grid-col gap-4 justify-center`}>
        <div className="grid grid-cols-2 gap-4">
            {inputs?.map((input, i) => {
            return <fieldset className="flex flex-col">
                <label className="text-xs mb-2 text-foreground">{input.label}</label>
                {input.type === InputTypes.textarea 
                    ? <textarea 
                        rows={9} 
                        className={`text-xs p-2
                                    bg-secondary text-foreground
                                    max-sm:bg-secondary/70  
                                    rounded shadow-md shadow-background`} 
                        placeholder="What did you have in mind?" /> 
                    : <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className={`text-xs w-full p-2
                                bg-secondary text-foreground 
                                rounded shadow-md shadow-background`} />}
            </fieldset>
            })}
            </div>
        <button type="submit" className='bg-primary max-md:ml-auto justify-center flex gap-1 text-nowrap  w-1/2 max-sm:w-2/3 text-shadow text-foreground rounded-2xl max-md:mt-3 shadow-lg shadow-background px-2 py-1.5 '>Send Message<MdSend className="mt-1" /> </button>
    </form>
}

export default ContactPage;