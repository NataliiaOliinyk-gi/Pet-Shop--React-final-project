
import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import ProductCard from '../../components/ProductCard/ProductCard';

import useFetch from '../../hooks/useFetch';

import { getProductsAll } from '../../api/products-api';

import styles from './Sales.module.css';

const Sales = () => {

    const { data: products, loading, error } = useFetch({
        request: getProductsAll,
        initialData: [],
    });

    const sales = products.filter(item => item.discont_price)

    const elements = sales.map(item => (
        <ProductCard key={item.id} item={item} />
    ))

    return (
        <SectionLayout title="Discounted items" showBreadcrumbs>
            <Filters showDiscounted={false}/>
            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
            <ul className={styles.container}>
                {elements}
            </ul>

        </SectionLayout>
    );
};

export default Sales;