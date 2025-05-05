
import SectionLayout from '../../../layouts/SectionLayout/SectionLayout';
import Carousel from '../../Carousel/Carousel';

import ModuleTitle from '../../ModuleTitle/ModuleTitle';

// import { Link } from 'react-router-dom';
// import CategorieCard from '../Categories/CategorieCard/CategorieCard';
import useFetch from '../../../hooks/useFetch';
import { getCategoriesAll } from '../../../api/categories-api';
// import { slugify } from '../../utils/slugify';

import styles from './MainModuleCard.module.css';

const MainModuleCard = () => {

    const { data, loading, error } = useFetch({
        request: getCategoriesAll,
        initialData: [],
    });

    return (
        <div>
            <SectionLayout>
                <ModuleTitle
                    text="Categories"
                    name='All categories'
                    to='/categories'
                />
                <Carousel data={data} loading={loading} error={error} to='/categories' name='All categories' />
            </SectionLayout>
        </div>
    )
};

export default MainModuleCard;