import { useParams, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import Filters from '../../shared/components/Filters/Filters';
import ProductCard from '../../shared/components/ProductCard/ProductCard';

import useCategoriesFetch from '../../shared/hooks/useCategoriesFetch';

import { selectCategoriesAll } from '../../redux/categories/categories-selectors';
import { slugify } from '../../shared/utils/slugify';

import styles from './SingleCategorie.module.css';

const SingleCategorie = () => {

    const { categories, loading: categoriesLoading, error: categoriesError } = useSelector(selectCategoriesAll);
    const { id: slug } = useParams();
    const navigate = useNavigate();

    const categoryItem = categories.find(
        item => slugify(item.title) === slug.toLowerCase()
    );

    const { categorie: categoryData, loading, error } = useCategoriesFetch(categoryItem?.id);

    useEffect(() => {
        if (!categoriesLoading && categories.length && !categoryItem) {
            navigate('/not-found');
        }
    }, [categoryItem, categoriesLoading, categories.length, navigate]);

    if (!categoryItem) {
        return null; // поки navigate ще не зробив редирект
    }

    const categorie = categoryData?.category?.title || '';
    const productsCategory = categoryData?.products || [];

    const elements = productsCategory.map(item => (
        <ProductCard key={item.id} item={item} />
    ));

    return (

        <SectionLayout
            title={categorie}
            showBreadcrumbs>
            <Filters />
            <Loader loading={categoriesLoading} />
            <Loader loading={loading} />
            {categoriesError && <LoadingError>{categoriesError}</LoadingError>}
            {error && <LoadingError>{error}</LoadingError>}
            <ul className={styles.categoriesBox}>
                {elements}
            </ul>

        </SectionLayout>

    );
};

export default SingleCategorie;