import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import Filters from '../../components/Filters/Filters';
import ProductCard from '../../components/ProductCard/ProductCard';

import useFetch from '../../hooks/useFetch';

import { getCategorieById } from '../../api/categories-api';

import styles from './SingleCategorie.module.css';

const SingleCategorie = () => {

    const { id: slug } = useParams();
    const categoryId = slug.split('-')[0];

    const request = useCallback(() => getCategorieById(categoryId), [categoryId]);
    const { data: categoryData, loading, error } = useFetch({
        request,
        initialData: [],
    });

    const categorie = categoryData?.category?.title || '';
    const productsCategory = categoryData?.data || [];

    const elements = productsCategory?.map(item => (
        <ProductCard key={item.id} item={item} />
    ))

    return (

        <SectionLayout title={categorie} showBreadcrumbs>
            <Filters />
            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
            <ul className={styles.categoriesBox}>
                {elements}
            </ul>

        </SectionLayout>

    );
};

export default SingleCategorie;