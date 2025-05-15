
import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Filters from '../../shared/components//Filters/Filters';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import ProductCard from '../../shared/components/ProductCard/ProductCard';

import useProductsFetch from '../../shared/hooks/useProductsFetch';

import styles from './Products.module.css';

const Products = () => {

    const { products, loading, error } = useProductsFetch()

    const elements = products.map(item => (
        <ProductCard key={item.id} item={item} />
    ));

    return (
        <SectionLayout title="All products" showBreadcrumbs>
            <Filters />
            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
            <ul className={styles.container}>
                {elements}
            </ul>

        </SectionLayout>
    )
};

export default Products;