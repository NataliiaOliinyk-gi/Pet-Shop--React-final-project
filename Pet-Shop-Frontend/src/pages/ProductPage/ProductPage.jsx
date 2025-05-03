
import SingleProduct from '../../modules/SingleProduct/SingleProduct';

import styles from './ProductPage.module.css';

const ProductPage = () => {
    return (
        <main>
            <h2 className={styles.title}>ProductPage</h2>
            <SingleProduct />
        </main>
    );
};

export default ProductPage;