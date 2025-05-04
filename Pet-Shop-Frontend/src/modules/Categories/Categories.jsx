import { Link } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';

import CategorieCard from './CategorieCard/CategorieCard';

import useFetch from '../../hooks/useFetch';

import { getCategoriesAll } from '../../api/categories-api';
import { slugify } from '../../utils/slugify';

import styles from './Categories.module.css';


const Categories = () => {

    const { data: categories, loading, error } = useFetch({
        request: getCategoriesAll,
        initialData: [],
    });

    const elements = categories.map(item => {
        const slug = slugify(item.title);
        return (
            <Link to={`/categories/${slug}`} key={item.id} className={styles.link}>
                <CategorieCard item={item} />
            </Link>
        )
    });

    return (
        <SectionLayout title="Categories" showBreadcrumbs >
            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.categoriesBox}>
                {elements}
            </div>

        </SectionLayout>
    );
};

export default Categories;