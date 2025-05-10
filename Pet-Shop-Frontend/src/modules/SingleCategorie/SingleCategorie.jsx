import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import Filters from '../../shared/components/Filters/Filters';
import ProductCard from '../../shared/components/ProductCard/ProductCard';

import useFetch from '../../shared/hooks/useFetch';

import { getCategorieById } from '../../shared/api/categories-api';

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