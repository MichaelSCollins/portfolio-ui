import { FaDownload } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import Link from 'next/link';

const HeroButtons: React.FC = () => {
    return (
        <section className={`
            flex gap-2.5 max-md:flex-col
            mt-1 
            w-full
            text-center text-nowrap
            lg:text-xs`}>
            <Link
                className={`
                    bg-secondary text-foreground
                    flex justify-center gap-2
                    rounded-3xl  cursor-pointer
                    py-2.5 px-5 max-sm:px-2`}
                href='https://docs.google.com/document/d/1MaI7IFk0fSh1fELwgzSvps0siFIdsFYs_ELmYL4vVmE/edit?usp=sharing'
            >
                Download CV
                <FaDownload className='mt-1' />
            </Link>
            <Link
                href={'https://calendly.com/michaelscollins-it/15min'}
                className={`bg-primary text-foreground 
                    py-2.5 px-11  cursor-pointer
                    shadow-2xl border-none rounded-3xl 
                    flex justify-center gap-2`}

            >
                Hire Me
                <FaBuildingUser className='mt-1' />
            </Link>
        </section>
    );
};

export default HeroButtons;