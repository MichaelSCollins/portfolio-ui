import { RiArrowDropLeftFill } from "react-icons/ri"; 
import { BasicInfo, Screenshots, Achievements, Skills } from '@/app/company/[id]/sections';
import ExperienceItem from '@/interfaces/ExperienceItem'
import experiences from '@/.fake/experience'
import Image from 'next/image';
import PieChart from '@/app/company/[id]/sections/chart'
import img from '@/public/img/page-content/blue-guy-4.webp'
import Link from 'next/link';
function CompanyPage({ params }: any) {
    const experience: ExperienceItem = experiences[params.id]
    console.log(experience)
    return (
        <div className='sm:px-24 max-sm:px-6'>
            <div className={'flex flex-col'}>
                <Link className='mt-8 text-secondary flex text-sm *:hover:text-primary' 
                    href="/experience">
                    <RiArrowDropLeftFill className="text-foreground text-3xl" /> 
                    <p className="pt-1">Back to Experience</p>
                </Link>
                <div className={"flex flex-col w-full gap-4"}>
                    <div className="flex max-sm:flex-col"><BasicInfo
                        experience={experience} />
                        {experience.screenshots
                            && experience.screenshots.length
                            && <Screenshots images={experience.screenshots || []} />}
                    </div>

                    <Skills skills={experience.skillBreakdown ?? []} />
                    <div className='flex max-sm:flex-col'>
                        <Image width={300} height={300} src={img.src} alt={''} className='h-2/3' />
                        <Achievements achievements={experience.achievements || []} />
                    </div>
                    {/* <PieChart /> */}
                </div>
            </div>
        </div>
    );
}
export default CompanyPage