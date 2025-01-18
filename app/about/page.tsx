import OverlayLayers from "@/components/Image/OverlayLayers";
import { SymbolId } from "@/components/Image/bg/symbols/SymbolStrategy";
import UpButton from "@/components/controls/UpButton";
import Hero from "@/components/hero/Hero"
import HeroPosition from "@/enums/HeroPosition";
import { OverlayAnchors } from "@/enums/OverlayDirection";

const title = 'Hire a developer'
const subtitle = 'that can take the lead'
const imageSrc = "/img/bg/image.png"
const imageWidth = 600

export default function About() {
  return (
    <div className="h-full h-min-screen font-[family-name:var(--font-geist-sans)]">
      <OverlayLayers
        anchor={OverlayAnchors.BIG_BOTTOM_RIGHT}
        src={imageSrc}
        bgSymbols={[{
          symbolId: SymbolId.Keyboard, position:
            { top: '5%', left: '23%' }
        }, {
          symbolId: SymbolId.Mail, position:
          { bottom: '50%', left: '43%' }
        }]}
        width={imageWidth}>
        <div className="flex max-sm:justify-between w-3/4 max-sm:w-1/2 h-full ">
          <UpButton />
          <Hero {...{
            title, subtitle,
            description: "As a lead developer, I bring years of experience in guiding teams and overseeing the development of complex, high-performance web applications. I specialize in both front-end and back-end technologies, including React, Angular, and various server-side frameworks such as Node.js and Springboot. My leadership approach focuses on clear communication, and efficient workflows by helping my team produce innovative, scalable solutions."
          }}
            position={HeroPosition.ABOUT} hideButtons />

        </div>
      </OverlayLayers>
    </div>
  );
}
