import { ScreenshotItem } from './ScreenShotItem'
import styles from './page.module.css'; //
import ImageItem from '@/lib/interfaces/ImageData'

export const Screenshots = ({ images }: { images: ImageItem[] }) => {
    return <section className={styles.screenshots}>
        <h2 className={styles.sectionTitle}>Screenshots</h2>
        <ul className={styles.screenshotGrid}>
            {images.map((image, i) => (
                <ScreenshotItem
                    src={image.src}
                    alt={image.alt}
                    text={''}
                    key={i} />))}
        </ul>
    </section>
}
