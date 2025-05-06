import { Link } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';

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
            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
            <ul className={styles.categoriesBox}>
                {elements}
            </ul>

        </SectionLayout>
    );
};

export default Categories;