import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';

import CategorieCard from './CategorieCard/CategorieCard';

import { getCategoriesAll } from '../../api/data';
import { slugify } from '../../utils/slugify';

import styles from './Categories.module.css';


const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const data = await getCategoriesAll();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const elements = categories.map(item => {
        const slug = slugify(item.title);
        return (
            <Link to={`/categories/${slug}`} key={item.id} className={styles.link}>
                <CategorieCard item={item} />
            </Link>
        )
    });

    return (
        <SectionLayout
            title="Categories"
            path={[{ name: "Categories", to: "/categories" }]}
        >
            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.categoriesBox}>
                {elements}
            </div>

        </SectionLayout>
    );
};

export default Categories;