import Image from 'next/image'
import ExperienceItem from '@/interfaces/ExperienceItem';
import styles from './page.module.css'; //

export const BasicInfo = ({ experience }: { experience: ExperienceItem }) => {
    return <section className={styles.hero + " pt-2"}>
        <Image
            src={experience.img?.src ?? ''} // Replace with default logo path
            alt={`${experience.title} Logo`}
            width={200}
            height={200}
            layout="intrinsic" />
        <p className={'text-primary text-2xl pt-4'}>{experience.title}</p>
        <p className={'text-foreground text-lg mb-1'}>{experience.duration}</p>

    </section >
}
