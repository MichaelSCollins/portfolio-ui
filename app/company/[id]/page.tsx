import Link from 'next/link';
import { RiArrowDropLeftFill } from "react-icons/ri";
import { BasicInfo, Screenshots, Achievements } from '@/app/company/[id]/sections';
import ExperienceItem from '@/lib/interfaces/ExperienceItem'
import experiences from '@/.fake/experience'
import StackedBarChart from './sections/chart';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CompanyPage({ params: { id } }: any) {
    const experience: ExperienceItem = experiences[+id]
    return (
        <div className='sm:px-12 max-sm:px-6  w-full'>
            <div className={'flex flex-col '}>
                <Link className='mt-8 text-secondary max-sm:mx-auto flex text-sm *:hover:text-primary'
                    href="/experience">
                    <RiArrowDropLeftFill className="text-foreground text-3xl" />
                    <p className="pt-1">Back to Experience</p>
                </Link>
                <div className={"flex flex-col w-full gap-4"}>
                    <div className="flex max-sm:flex-col justify-between w-full">
                        <div className="flex max-sm:flex-col sm:w-3/4">
                            <BasicInfo experience={experience} />
                        </div>
                        <StackedBarChart breakdownData={experience.skillBreakdown ?? []} />
                    </div>

                    <div className='flex max-sm:flex-col sm:mt-10'>
                        <Achievements achievements={experience.achievements || []} />
                        <div className='w-full h-full grow flex justify-between'>
                            {/* <FadeInImage
                                image={{
                                    src: '/img/page-content/blue-guy-4.webp',
                                    alt: experience.img?.alt || 'company-logo',
                                    height: 500,
                                    width: 750
                                }} /> */}
                        </div>

                    </div>
                    {experience.screenshots
                        && experience.screenshots.length
                        && <Screenshots images={experience.screenshots || []} />}
                    {/* <PieChart /> */}
                </div>
            </div>
        </div>
    );
}
export default CompanyPage