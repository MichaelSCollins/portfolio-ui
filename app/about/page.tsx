import OverlayLayers from "@/components/Image/OverlayLayers";
import UpButton from "@/components/controls/UpButton";
import Hero from "@/components/hero/Hero";

const title = 'Hire a developer'
const subtitle = 'that can lead'
const imageSrc = "/img/bg/image.png"
const imageWidth = 600

export enum OverlayAnchors {
  BOTTOM_RIGHT = "overlay-right",
  BOTTOM_LEFT = "overlay-left",
}

export default function About() {
  return (
    <div className="p-4= font-[family-name:var(--font-geist-sans)]">
      <OverlayLayers
        anchor={OverlayAnchors.BOTTOM_RIGHT}
        src={imageSrc}
        width={imageWidth}>
        <Hero {...{ title, subtitle, description: "As a lead developer, I bring years of experience in guiding teams and overseeing the development of complex, high-performance web applications. I specialize in both front-end and back-end technologies, including React, Angular, and various server-side frameworks such as Node.js and Springboot. My leadership approach focuses on clear communication, and efficient workflows by helping my team produce innovative, scalable solutions." }} hideButtons />
        <UpButton />
      </OverlayLayers>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
