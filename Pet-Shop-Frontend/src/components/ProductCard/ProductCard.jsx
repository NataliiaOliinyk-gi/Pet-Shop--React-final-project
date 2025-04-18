
import { localUrl } from '../../api/data';

import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <img src={`${localUrl}${item.image}`} alt={item.title} className={styles.image} />
            </div>
            <div className={styles.boxContent}>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.description}>
                    {item.discont_price ? (
                        <>
                            <p className={styles.price}>${item.discont_price}</p>
                            <p className={styles.discont}>${item.price}</p>
                            <div className={styles.discountBadge}>
                                -{Math.round(((item.price - item.discont_price) / item.price) * 100)}%
                            </div>
                        </>
                    ) : (
                        <p className={styles.price}>${item.price}</p>
                    )}
                </div>
            </div>

            <button className={styles.addToCartBtn}>Add to cart</button>
        </div>
    )
};

export default ProductCard;