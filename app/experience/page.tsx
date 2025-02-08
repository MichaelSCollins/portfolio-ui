"use client"
import experienceData from "@/.fake/experience"
import fadeInLoadingAnimation from "@/lib/animations/fadeInAnimation";
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface ExperienceData {
  title: string;
  img: {
    src: string;
  };
  description: string;
  duration: string;
  skills?: string[];
  skillBreakdown: number[];
  achievements: string[];
}
let loadedImages = 0;
const Experience = () => {
  const [complete, setComplete] = useState(false);
  const ExperienceCard = ({ experience, index }:
    { experience: ExperienceData, index: number }) => {
    const [loaded, setLoaded] = useState(false)
    const styles = fadeInLoadingAnimation(loaded)
    return <Link href={"/company/" + index}
      style={styles}
      className="h-full min-h-72" key={index}>
      <div className="card h-full shadow cursor-pointer hover:bg-secondary shadow-xl bg-secondary/35 text-foreground flex flex-col  border border-secondary/50"
      >
        {experience.img &&
          <div className={
            `rounded-xl inner-shadow relative w-full 
            my-auto flex 
            flex-col justify-center`}>
            <Image
              alt="done"
              height={250}
              width={300}
              className="w-full"
              src={experience.img.src} onLoad={() => {
                console.log('loaded', loadedImages)
                loadedImages += 1;
                if (loadedImages >= experienceData.length)
                  setComplete(true)
                setLoaded(true)
              }} />
          </div>}
        <h2 className="card-title text-primary">{experience.title}</h2>
        <p className="card-duration">{experience.duration}</p>
        <p className="card-description">{experience.description}</p>
      </div>
    </Link>
  }
  return (
    <div className="">
      <h1 className='text-2xl sm:ml-8 px-2'>
        <span className="heading">My </span>
        <span className='text-primary'>Experience</span>
      </h1>
      {!complete
        && <div className="flex pt-12 justify-center w-full my-auto">
          <FaSpinner className="animate-spin text-2xl text-primary" />
          <p className="pl-2">Loading...</p>
        </div>}
      <div className="mx-3 sm:mx-6">
        <div className="grid sm:grid-cols-3 gap-4 py-4 my-4 px-4 sm:p1" >
          {experienceData.map((exp, index) =>
            <ExperienceCard key={index} experience={exp} index={index} />
          )}
        </div>
      </div></div>
  );
};

export default Experience;