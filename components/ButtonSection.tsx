import { FaDownload, FaUser } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const ButtonSection: React.FC = () => {

    return (
        <div className="flex w-full gap-2.5 mt-1 text-xs">
            <Link 
                className="bg-secondary text-foreground rounded-3xl py-2.5 px-5 flex items-center px-11 gap-2"
                href={'https://calendly.com/michaelscollins-it/15min'}
            >
            <FaBuildingUser />
            Hire Me
            </Link>
            <Link
                className="bg-primary text-foreground py-2.5 px-5 border-none rounded-3xl flex items-center gap-2"
                href='https://docs.google.com/document/d/1MaI7IFk0fSh1fELwgzSvps0siFIdsFYs_ELmYL4vVmE/edit?usp=sharing'
            >
                <FaDownload />
                Download CV
            </Link>
        </div>
    );
};

export default ButtonSection;