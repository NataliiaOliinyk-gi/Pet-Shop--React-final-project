

import styles from './OrderTitle.module.css';

const OrderTitle = ({ count, sum }) => {

    return (
        <div className={styles.descriptionsBox}>
            <h3 className={styles.title}>Order details</h3>
            <div className={styles.totalPriceBox}>
                <div className={styles.totalCountBox}>
                    <p className={styles.totalCount}>{count} items</p>
                    <p className={styles.totalCount}>Total</p>
                </div>
                <p className={styles.totalPrice}>${sum}</p>
            </div>
        </div>
    )
};

export default OrderTitle;