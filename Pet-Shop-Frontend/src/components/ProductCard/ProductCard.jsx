import { Link } from 'react-router-dom';

import { localUrl } from '../../api/backendInstance';

import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {
    return (
        <li className={styles.card}>
            <div className={styles.imageBox}>
                <img src={`${localUrl}${item.image}`} alt={item.title} className={`img-fluid ${styles.image}`} />
            </div>

            <div className={styles.boxContent}>
                <Link to={`/products/${item.id}`} className={styles.link}>
                    <p className={styles.title}>{item.title}</p>
                </Link>

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
        </li>
    )
};

export default ProductCard;