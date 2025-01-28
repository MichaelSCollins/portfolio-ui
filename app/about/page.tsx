import OverlayLayers from "@/components/Layers/OverlayLayers";
import { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";
import UpButton from "@/components/controls/UpButton";
import Hero from "@/components/hero/Hero"
import PortfolioPage from "@/enums/PortfolioPage";
import { OverlayAnchors } from "@/enums/OverlayDirection";
import Img from '@/public/img/bg/image.png'
import FadeInImage from "@/interfaces/FadeInImage";

const title = 'Hire a developer'
const subtitle = 'that can take the lead'
const imageWidth = 600
const imageHeight = 750

export default function About() {
  const image: FadeInImage = {
    src: Img.src,
    anchor: OverlayAnchors.BOTTOM_RIGHT,
    width: imageWidth,
    height: imageHeight,
    alt: 'overlay-image'
  }
  return (
    <div className="h-full w-screen">
      <OverlayLayers
        page={PortfolioPage.ABOUT}
        image={image}
        bgSymbols={[{
          symbolId: SymbolId.Keyboard, 
          position: { 
            top: '31%', 
            left: '10%' 
          }
        }, {
          symbolId: SymbolId.Mail, 
          position: { 
              bottom: '48%', 
              left: '33%' 
            }
          }]}>
        <div className="flex max-sm:justify-between w-3/4 max-sm:w-1/2">
          <UpButton />
          <Hero {...{
            title, subtitle,
            description: "As a lead developer, I bring years of experience in guiding teams and overseeing the development of complex, high-performance web applications. I specialize in both front-end and back-end technologies, including React, Angular, and various server-side frameworks such as Node.js and Springboot. My leadership approach focuses on clear communication, and efficient workflows by helping my team produce innovative, scalable solutions."
          }}
            page={PortfolioPage.ABOUT} 
            hideButtons />
        </div>
      </OverlayLayers >
    </div >
  );
}
