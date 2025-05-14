import { useSelector } from 'react-redux';

import Banner from '../Banner/Banner';
import DiscountForm from '../DiscountForm/DiscountForm';

import MainModuleCard from './MainModuleCard/MainModuleCard';

import useFetch from '../../shared/hooks/useFetch';

import { getProductsAll } from '../../shared/api/products-api';
import { selectCategoriesAll } from '../../redux/categories/categories-selectors';

import styles from './Main.module.css';

const Main = () => {

    const { categories, loading: loadingCategories, error: errorCategories } = useSelector(selectCategoriesAll)

    const { data: products, loading: loadingSale, error: errorSale } = useFetch({
        request: getProductsAll,
        initialData: [],
    });

    const sales = products
        .filter(item => item.discont_price)
        .slice(0, 8);

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