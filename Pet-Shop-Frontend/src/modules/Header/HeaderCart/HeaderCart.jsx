import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTotalCartItems } from '../../../redux/cart/cart-selectors';

import styles from './HeaderCart.module.css';

const HeaderCart = () => {

    const count = useSelector(selectTotalCartItems);

    return (
        <Link to="/cart" className={styles.link}>
            <div className={styles.baketBox}>
                {count && <div className={styles.count}>{count}</div>}
                <img src="../../src/assets/icons/basketEmpty.svg" alt="Basket" className={styles.baket} />
            </div>
        </Link>
    )
};

export default HeaderCart;