
import Banner from '../Banner/Banner';

import MainModuleCard from './MainModuleCard/MainModuleCard';

import useFetch from '../../shared/hooks/useFetch';
import { getCategoriesAll } from '../../shared/api/categories-api';
import { getProductsAll } from '../../shared/api/products-api'

import styles from './Main.module.css';

const Main = () => {

    const { data: categories, loading: loadingCategories, error: errorCategories } = useFetch({
        request: getCategoriesAll,
        initialData: [],
    });

    const { data: products, loading: loadingSale, error: errorSale } = useFetch({
        request: getProductsAll,
        initialData: [],
    });

    const sales = products.filter(item => item.discont_price)


    return (
        <section>
            <Banner text="Amazing Discounts on Pets Products!" />
            <MainModuleCard
                text="Categories"
                to='/categories'
                name='All categories'
                data={categories}
                loading={loadingCategories}
                error={errorCategories} />

            <MainModuleCard
                text="Sale"
                to='/sales'
                name='All sales'
                data={sales}
                loading={loadingSale}
                error={errorSale} />
        </section>
    )
};

export default Main;