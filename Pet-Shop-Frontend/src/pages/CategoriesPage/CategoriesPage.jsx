// import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import Categories from '../../components/Categories/Categories';

// import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
    return (
        <main>
            {/* <Breadcrumbs path={[{ name: "Categories", to: "/categories" }]} /> */}
            <Categories />
        </main>
    );
};

export default CategoriesPage;