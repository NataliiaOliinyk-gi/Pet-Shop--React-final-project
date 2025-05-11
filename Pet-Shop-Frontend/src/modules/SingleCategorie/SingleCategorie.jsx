import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import Filters from '../../shared/components/Filters/Filters';
import ProductCard from '../../shared/components/ProductCard/ProductCard';

import useFetch from '../../shared/hooks/useFetch';

import { getCategorieById } from '../../shared/api/categories-api';
import { selectCategoriesAll } from '../../redux/categories/categories-selector';
import { slugify } from '../../shared/utils/slugify';

import styles from './SingleCategorie.module.css';

const SingleCategorie = () => {

    const { categories, loading: categoriesLoading, error: categoriesError } = useSelector(selectCategoriesAll);
    const { id: slug } = useParams();
    const navigate = useNavigate();

    const categoryItem = categories.find(
        item => slugify(item.title) === slug.toLowerCase()
    );

    // Хук useCallback ЗАВЖДИ викликається
    const request = useCallback(() => {
        if (!categoryItem?.id) return Promise.resolve({ category: {}, data: [] });
        return getCategorieById(categoryItem.id);
    }, [categoryItem?.id]);

    // useFetch ЗАВЖДИ викликається
    const { data: categoryData, loading, error } = useFetch({
        request,
        initialData: { category: {}, data: [] },
    });

    useEffect(() => {
        if (!categoriesLoading && categories.length && !categoryItem) {
            navigate('/not-found');
        }
    }, [categoryItem, categoriesLoading, categories.length, navigate]);

    if (categoriesLoading) {
        return <Loader loading={true} />;
    }
    if (!categories.length) {
        return <LoadingError>{categoriesError}</LoadingError>;
    }

    if (!categoryItem) {
        return null; // поки navigate ще не зробив редирект
    }

    const categorie = categoryData?.category?.title || '';
    const productsCategory = categoryData?.data || [];

    const elements = productsCategory.map(item => (
        <ProductCard key={item.id} item={item} />
    ))

    return (

        <SectionLayout
            title={categorie}
            showBreadcrumbs>
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