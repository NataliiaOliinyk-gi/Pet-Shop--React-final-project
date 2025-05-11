import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';

import Button from '../Button/Button';
import DiscountBadge from '../DiscountBadge/DiscountBadge';

import { localUrl } from '../../api/backendInstance';
import { slugify } from '../../utils/slugify';
import { addToCart } from '../../../redux/cart/cart-slice';

import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {

    const slug = slugify(item.title);
    const dispatch = useDispatch();

    const onAddProductToCart = (payload) => {
        dispatch(addToCart(payload));
    };

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
                        </>
                    ) : (
                        <p className={styles.price}>${item.price}</p>
                    )}
                </div>
            </div>

            <div className={styles.addToCartBtnBox}>
                <Button text="Add to cart" width="100%" onClick={()=> onAddProductToCart(item)}/>
            </div>

            {item.discont_price &&
                <div className={styles.discountBadgeBox}>
                    <DiscountBadge price={item.price} discont_price={item.discont_price} />
                </div>}
        </li>
    )
};

export default ProductCard;