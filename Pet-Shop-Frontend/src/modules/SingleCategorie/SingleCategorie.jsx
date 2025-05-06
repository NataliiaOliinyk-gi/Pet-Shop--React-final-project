import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import Filters from '../../components/Filters/Filters';
import ProductCard from '../../components/ProductCard/ProductCard';

import { getCategorieById, getCategoriesAll } from '../../api/categories-api';
import { slugify } from '../../utils/slugify';

import styles from './SingleCategorie.module.css';

const SingleCategorie = () => {

    const [categorie, setCategorie] = useState('');
    const [productsCategory, setProductsCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id: slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: allCategories, error: errorCategories } = await getCategoriesAll();
                if (errorCategories) {
                    return setError(errorCategories.message);
                }
                const categoryItem = allCategories.find(
                    item => slugify(item.title) === slug.toLowerCase()
                );
                if (!categoryItem) {
                    navigate('/not-found');
                    return;
                }

                // Отримуємо товари для цієї категорії по id
                const { data: categoryData, error: errorProducts } = await getCategorieById(categoryItem.id);
                if (errorProducts) {
                    return setError(errorProducts.message);
                }
                setCategorie(categoryData.category.title);
                setProductsCategory(categoryData.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [slug, navigate]);


    const elements = productsCategory.map(item => (
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