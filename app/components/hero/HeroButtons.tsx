import { FaDownload } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import Link from 'next/link';

const HeroButtons: React.FC = () => {
    return (
        <section className={`
            flex gap-3 max-md:flex-col
            mt-2 
            w-full
            text-center text-nowrap
            md:text-sm`}>
            <Link
                className={`
                    bg-secondary/80 hover:bg-secondary text-foreground
                    flex justify-center items-center gap-2
                    rounded-3xl cursor-pointer
                    py-3 px-6 max-sm:px-4
                    transition-all duration-200
                    hover:scale-105 hover:shadow-lg
                    font-medium`}
                href='https://docs.google.com/document/d/1MaI7IFk0fSh1fELwgzSvps0siFIdsFYs_ELmYL4vVmE/edit?usp=sharing'
            >
                Download CV
                <FaDownload className='text-sm' />
            </Link>
            <Link
                href={'https://calendly.com/michaelscollins-it/15min'}
                className={`bg-primary hover:bg-primary/90 text-foreground 
                    py-3 px-8 cursor-pointer
                    shadow-xl hover:shadow-2xl border-none rounded-3xl 
                    flex justify-center items-center gap-2
                    transition-all duration-200
                    hover:scale-105
                    font-medium`}

            >
                Hire Me
                <FaBuildingUser className='text-sm' />
            </Link>
        </section>
    );
};

export default HeroButtons;