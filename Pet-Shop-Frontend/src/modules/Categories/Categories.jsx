import { Link } from 'react-router-dom';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';

import CategorieCard from './CategorieCard/CategorieCard';

import useFetch from '../../shared/hooks/useFetch';

import { getCategoriesAll } from '../../shared/api/categories-api';
import { slugify } from '../../shared/utils/slugify';

import styles from './Categories.module.css';


const Categories = () => {

    const { data: categories, loading, error } = useFetch({
        request: getCategoriesAll,
        initialData: [],
    });

    const elements = categories.map(item => {
        const slug = slugify(item.title);
        return (
            <Link to={`/categories/${item.id}-${slug}`} key={item.id} className={styles.link}>
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