
import { localUrl } from '../../../shared/api/backendInstance';

import styles from './CategorieCard.module.css';

const CategorieCard = ({ item }) => {
    return (
        <li className={styles.card}>
            <div className={styles.imageBox}>
                <img src={`${localUrl}${item.image}`} alt={item.title} className="img-fluid" />
            </div>
            <p className={styles.title}>{item.title}</p>
        </li>
    )
};

export default CategorieCard;