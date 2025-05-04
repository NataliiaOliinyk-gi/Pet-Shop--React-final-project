import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
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
        <div key={item.id}>
            <Link to={`/products/${item.id}`} key={item.id} className={styles.link}>
                <ProductCard item={item} />
            </Link>
        </div>
    ))

    return (

        <SectionLayout title={categorie} showBreadcrumbs>
            <Filters />
            {loading &&
                <p className={styles.loading}>Loading...</p>}
            {error &&
                <p className={styles.error}>{error}</p>}
            <div className={styles.categoriesBox}>
                {elements}
            </div>

        </SectionLayout>

    );
};

export default SingleCategorie;