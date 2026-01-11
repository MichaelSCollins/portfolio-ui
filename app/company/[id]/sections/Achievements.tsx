import { RxRocket } from "react-icons/rx";
import styles from './page.module.css'; //

export const Achievements = ({ achievements }: { achievements: string[] }) => {
    return <section className={styles.accomplishments}>
        <h2 className={styles.sectionTitle}>Accomplishments</h2>
        <ul className={styles.accomplishmentList}>
            {achievements?.map((achievement, i) =>
            (<li className="flex flex-cols-2 justify-start" key={i}>
                <div className="px-2 text-lg text-secondary"><RxRocket className="text-primary" /> </div> <p>{achievement}</p>
            </li>))}
        </ul>
    </section>
}
