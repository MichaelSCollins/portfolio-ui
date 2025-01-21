import PieChart from './chart';
import styles from './page.module.css'

export const Skills = ({ skills }: { skills: number[] }) => {
    return (<section className={'flex flex-col'}>
        <h2 className={styles.sectionTitle}>
            Skills
        </h2>
        <PieChart breakdownData={skills} />
        {/* <ul>
            {skills.map(
                (skill, i) => (<li key={i}>
                    {skill}
                </li>))}
        </ul> */}
    </section>)
}
