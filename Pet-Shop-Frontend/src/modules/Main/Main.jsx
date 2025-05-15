import { useSelector } from 'react-redux';
import { useMemo } from "react";

import Banner from '../Banner/Banner';
import DiscountForm from '../DiscountForm/DiscountForm';

import MainModuleCard from './MainModuleCard/MainModuleCard';

import useProductsFetch from '../../shared/hooks/useProductsFetch';

// import useFetch from '../../shared/hooks/useFetch';

// import { getProductsAllApi } from '../../shared/api/products-api';
// import { getProductsAll } from '../../shared/api/products-api';
import { selectCategoriesAll } from '../../redux/categories/categories-selectors';

import styles from './Main.module.css';

const Main = () => {

    const { categories, loading: loadingCategories, error: errorCategories } = useSelector(selectCategoriesAll)

    // const { data: sales, loading: loadingSale, error: errorSale } = useFetch({
    //     request: () => getProductsAllApi({ discont: true }),
    //     initialData: [],
    // });

    const defaultParams = useMemo(() => ({ discont: true }), []);
    const { products:sales, loading: loadingSale, error: errorSale } = useProductsFetch(defaultParams);

   

    // const { data: products, loading: loadingSale, error: errorSale } = useFetch({
    //     request: getProductsAll,
    //     initialData: [],
    // });

    // const sales = products
    //     .filter(item => item.discont_price)
    //     .slice(0, 8);

    return (
        <main className={styles.container}>
            <Banner text="Amazing Discounts on Pets Products!" />

            <MainModuleCard
                text="Categories"
                to='/categories'
                name='All categories'
                data={categories}
                loading={loadingCategories}
                error={errorCategories} />

            <DiscountForm />

            <MainModuleCard
                text="Sale"
                to='/sales'
                name='All sales'
                data={sales}
                loading={loadingSale}
                error={errorSale} />
        </main>
    )
};

export default Main;