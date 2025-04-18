
import { localUrl } from '../../../api/data';

import styles from './CategorieCard.module.css';

const CategorieCard = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <img src={`${localUrl}${item.image}`} alt={item.title} className="img-fluid" />
            </div>
            <p className={styles.title}>{item.title}</p>
        </div>
    )
};

export default CategorieCard;