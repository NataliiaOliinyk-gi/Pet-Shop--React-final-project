import { useSelector } from 'react-redux';
import { useMemo } from "react";

import Banner from '../Banner/Banner';
import DiscountForm from '../DiscountForm/DiscountForm';

import MainModuleCard from './MainModuleCard/MainModuleCard';

import useProductsFetch from '../../shared/hooks/useProductsFetch';

import { selectCategoriesAll } from '../../redux/categories/categories-selectors';

import styles from './Main.module.css';

const Main = () => {

    const { categories, loading: loadingCategories, error: errorCategories } = useSelector(selectCategoriesAll)

    const defaultParams = useMemo(() => ({ discont: true, limit: 8 }), []);
    const { products: sales, loading: loadingSale, error: errorSale } = useProductsFetch(defaultParams);

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