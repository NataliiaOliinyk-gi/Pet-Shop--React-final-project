import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';

import CategorieCard from './CategorieCard/CategorieCard';

import { selectCategoriesAll } from '../../redux/categories/categories-selectors';
import { slugify } from '../../shared/utils/slugify';

import styles from './Categories.module.css';

const Categories = () => {

    const { categories, loading, error } = useSelector(selectCategoriesAll);

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