
import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Filters from '../../shared/components/Filters/Filters';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import ProductCard from '../../shared/components/ProductCard/ProductCard';

import useFetch from '../../shared/hooks/useFetch';
import useProductsFilters from '../../shared/hooks/useProductsFilters';

import { getProductsAll } from '../../shared/api/products-api';

import styles from './Sales.module.css';

const Sales = () => {

    const { data: products, loading, error } = useFetch({
        request: getProductsAll,
        initialData: [],
    });

    const sales = products.filter(item => item.discont_price);

    const { getFilteredProducts } = useProductsFilters();
    const filteredProducts = getFilteredProducts(sales);

    const elements = filteredProducts.map(item => (
        <ProductCard key={item.id} item={item} />
    ))

    return (
        <SectionLayout title="Discounted items" showBreadcrumbs>
            <Filters showDiscounted={false} />
            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
            <ul className={styles.container}>
                {elements}
            </ul>

        </SectionLayout>
    );
};

export default Sales;