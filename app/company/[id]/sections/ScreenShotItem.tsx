import Image from 'next/image'
import styles from './page.module.css'; //
import ImageItem from '@/interfaces/ImageItem'

export const ScreenshotItem = (image: ImageItem) => {
    return <li key={image.alt}
        className={styles.screenshotItem}>
        <Image {...image}
            width={400}
            height={250}
            layout="intrinsic"
            alt={image.alt} />
    </li>
}