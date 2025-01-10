import ButtonSection from "@/components/ButtonSection";
import Header from "@/components/Header";
import ImageCard from "@/components/ImageOverlay";
import SwirlyIcon from "@/components/SwirlyArrowBgIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-row  mt-24">
          <SwirlyIcon />
          <article>
          <section className="flex flex-col w-full justify-left ml-16">
          <Header/>
          <ButtonSection/>
        </section>
        <ImageCard 
          src={"/img/page-content/blue-guy-3.png"} 
          alt={""} 
          width={300} 
          height={500} />
          </article>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
