import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import { localUrl } from '../../api/backendInstance';
import { slugify } from '../../utils/slugify';

import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {

    const slug = slugify(item.title);

    return (
        <li className={styles.card}>
            <div className={styles.imageBox}>
                <img src={`${localUrl}${item.image}`} alt={item.title} className={`img-fluid ${styles.image}`} />
            </div>

            <div className={styles.boxContent}>
                <Link to={`/products/${item.id}-${slug}`} className={styles.link}>
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

            <div className={styles.addToCartBtnBox}>
                <Button text="Add to cart" width="100%" />
            </div>
        </li>
    )
};

export default ProductCard;