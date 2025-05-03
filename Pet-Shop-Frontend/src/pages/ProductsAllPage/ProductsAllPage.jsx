
import Products from '../../modules/Products/Products';

import styles from './ProductsAllPage.module.css';

const ProductsAllPage = () => {
    return (
        <main>
            <h2 className={styles.title}>ProductsAllPage</h2>
            <Products />
        </main>
    );
};

export default ProductsAllPage;