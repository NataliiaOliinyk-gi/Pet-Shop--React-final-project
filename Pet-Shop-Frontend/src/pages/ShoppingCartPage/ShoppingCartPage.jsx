
import ShoppingCart from '../../modules/ShoppingCart/ShoppingCart';

import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = ()=>{
    return (
        <main>
            <h2 className={styles.title}>ShoppingCartPage</h2>
            <ShoppingCart />
        </main>
    );
};

export default ShoppingCartPage;