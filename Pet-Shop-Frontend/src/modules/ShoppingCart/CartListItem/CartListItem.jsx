import { memo } from 'react';
import { Link } from 'react-router-dom';

import Counter from '../../../shared/components/Counter/Counter';
import PriceBox from '../../../shared/components/PriceBox/PriceBox';
import RemoveIcon from '../../../shared/components/Icons/RemoveIcon/RemoveIcon';

import { localUrl } from '../../../shared/api/backendInstance';
import { slugify } from '../../../shared/utils/slugify';

import styles from './CartListItem.module.css';

const CartListItem = ({ item, onIncreaseCart, onDecreaseCart, onDeleteFromCart }) => {

    const slug = slugify(item.title);

    return (
        <li className={styles.cartItemContainer}>
            <Link to={`/products/${slug}`} className={styles.link}>
                <div className={styles.imageContainer}
                    style={{ backgroundImage: `url(${localUrl}${item.image})` }}>
                </div>
            </Link>
            <div className={styles.descriptionsContainer}>
                <div className={styles.titleContainer}>
                    <Link to={`/products/${slug}`} className={styles.link}>
                        <p className={styles.title}>{item.title}</p>
                    </Link>
                    <RemoveIcon onClick={() => onDeleteFromCart(item.id)} />
                </div>

                <div className={styles.priceContainer}>
                    <Counter
                        count={item.count}
                        plus={() => onIncreaseCart(item.id)}
                        minus={() => onDecreaseCart(item.id)}
                    />
                    <PriceBox
                        price={item.price * item.count}
                        discont_price={item.discont_price ? item.discont_price * item.count : null}
                    />
                </div>
            </div>
        </li>
    )
};

export default memo(CartListItem);