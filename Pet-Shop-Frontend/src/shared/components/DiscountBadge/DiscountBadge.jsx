
import styles from './DiscountBadge.module.css';

const DiscountBadge = ({ price, discont_price }) => {

    return (
        <div className={styles.discountBadge}>
            -{Math.round(((price - discont_price) / price) * 100)}%
        </div>
    )
};

export default DiscountBadge;