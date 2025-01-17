import { SiFiverr } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer: FC = () => {
    return (
        // <>
        // <About /><ContactPage />
        <footer className="px-20 py-6 mt-8 bg-secondary/20 w-full flex flex-col ">
            <div className="flex flex-col w-full justify-center ">
                {/* Contact Info */}
                <div className="flex max-sm:flex-col max-sm:mx- w-full justify-center gap-8 mb-6 text-center md:text-center">
                    <p className="text-sm flex"><FaPhone className="text-lg mr-1" /> <span className="flex flex-col justify-center">(123) 456-7890</span></p>
                    <p className="text-sm flex"><AiOutlineMail className="text-lg mr-1" /> <span className="flex flex-col justify-center">codebigthings@gmail.com</span></p>
                    <p className="text-sm flex"><CiLocationOn className="text-lg mr-1" /> <span className="flex flex-col justify-center">Long Beach, CA</span></p>
                </div>

                {/* Social Icons */}
                <div className="flex  w-full max-sm:mb-6 max-sm:justify-left space-x-8">
                    <a
                        href="https://github.com/MichaelSCollins"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/michael-collins-8510bbb1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://www.fiverr.com/mscollins1989?public_mode=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-500 transition-colors"
                    >
                        <SiFiverr size={28} />
                    </a>
                </div>
            </div>
            <p className="text-right max-sm:text-left sm:pb-6 sm:mr-24">Terms of Service - Privacy Policy</p>
        </footer>
        // </>
    );
};

export default Footer;