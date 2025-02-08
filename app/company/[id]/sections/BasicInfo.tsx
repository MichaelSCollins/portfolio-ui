import Image from 'next/image'
import ExperienceItem from '@/lib/interfaces/ExperienceItem';

export const BasicInfo = ({ experience }: { experience: ExperienceItem }) => {
    return <section className={`
            flex flex-col sm:justify-start sm:text-left pt-2 p-12
            max-sm:justify-center max-sm:text-center max-sm:w-full`}>
        <Image
            src={experience.img?.src ?? ''} // Replace with default logo path
            alt={`${experience.title} Logo`}
            width={200}
            height={200}
            className='max-sm:mx-auto my-auto'
            layout="intrinsic" />
        <p className={'text-primary text-2xl pt-4'}>{experience.title}</p>
        <p className={'text-foreground text-lg mb-1'}>{experience.duration}</p>

    </section >
}
