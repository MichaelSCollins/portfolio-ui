import Image from 'next/image';
import styles from './Experience.module.css'; // Assuming CSS file is created
import Logo from '@/public/img/companies/TheHomeDepot.png'
export default function Experience() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.companyImage}>
                    <Image
                        src={Logo.src} // Replace with your actual company logo path
                        alt="Company Logo"
                        width={150}
                        height={150}
                        layout="intrinsic"
                    />
                </div>
                <h1 className={styles.title}>Company Name</h1>
                <p className={styles.subtitle}>Here is a summary of my professional experience</p>
            </section>


            <section className={styles.skills}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <ul className={styles.skillsList}>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>CSS, TailwindCSS</li>
                    {/* Add more skills here */}
                </ul>
            </section>

            <section className={styles.accomplishments}>
                <h2 className={styles.sectionTitle}>Accomplishments</h2>
                <ul className={styles.accomplishmentList}>
                    <li>Built a scalable web app for XYZ company</li>
                    <li>Improved performance of the app by 30%</li>
                    <li>Led a team of developers to launch a product</li>
                    {/* Add more accomplishments here */}
                </ul>
            </section>

            <section className={styles.screenshots}>
                <h2 className={styles.sectionTitle}>Screenshots</h2>
                <div className={styles.screenshotGrid}>
                    <div className={styles.screenshotItem}>
                        <Image
                            src="/screenshot1.png" // Replace with your screenshot paths
                            alt="Screenshot 1"
                            width={400}
                            height={250}
                            layout="intrinsic"
                        />
                    </div>
                    <div className={styles.screenshotItem}>
                        <Image
                            src="/screenshot2.png" // Replace with your screenshot paths
                            alt="Screenshot 2"
                            width={400}
                            height={250}
                            layout="intrinsic"
                        />
                    </div>
                    {/* Add more screenshots here */}
                </div>
            </section>
            <section className={styles.socialMedia}>
                <h2 className={styles.sectionTitle}>Connect with Me</h2>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    {/* Add more social links if necessary */}
                </div>
            </section>
        </div>
    );
}