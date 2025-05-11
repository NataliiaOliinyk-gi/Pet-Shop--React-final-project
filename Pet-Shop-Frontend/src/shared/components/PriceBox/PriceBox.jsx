
import styles from './PriceBox.module.css';

const PriceBox = ({
    discont_price,
    price,
    variant = 'default',
}) => {
    return (
        <div className={`${styles.priceBox} ${styles[variant]}`} >
            {discont_price ? (
                <>
                    <p className={`${styles.price} ${styles[variant]}`} >
                        ${discont_price}
                    </p>
                    <p className={`${styles.discont} ${styles[variant]}`} >
                        ${price}
                    </p>
                </>
            ) : (
                <p className={styles.price}>${price}</p>
            )}
        </div>
    )
};

export default PriceBox;