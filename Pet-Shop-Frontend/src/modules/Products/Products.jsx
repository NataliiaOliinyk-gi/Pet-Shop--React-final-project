
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import ProductCard from '../../components/ProductCard/ProductCard';

import useFetch from '../../hooks/useFetch';

import { getProductsAll } from '../../api/products-api';


import styles from './Products.module.css';

const Products = () => {

    const { data: products, loading, error } = useFetch({
        request: getProductsAll,
        initialData: [],
    });

    const elements = products.map(item => (
        <ProductCard key={item.id} item={item} />
    ))

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