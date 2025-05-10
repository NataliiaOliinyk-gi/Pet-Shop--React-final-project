import { Link } from 'react-router-dom';

import styles from './HeaderCart.module.css';

const HeaderCart = () => {
    return (
        <Link to="/cart">
            <img src="../../src/assets/icons/basketEmpty.svg" alt="Basket" className={styles.baket} />
        </Link>
    )
};

export default HeaderCart;