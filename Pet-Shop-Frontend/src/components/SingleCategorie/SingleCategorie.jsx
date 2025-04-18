import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Filters from '../Filters/Filters';
import ProductCard from './ProductCard/ProductCard';

import { getCategorieById } from '../../api/data';

import styles from './SingleCategorie.module.css';

const SingleCategorie = () => {

    const [categorie, setCategorie] = useState('');
    const [productsCategory, setProductsCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCategorie = async () => {
            try {
                setLoading(true);
                const data = await getCategorieById(id);
                setCategorie(data.category.title);
                setProductsCategory(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCategorie();
    }, [id]);


    const elements = productsCategory.map(item => (
        <div key={item.id}>
            <Link to={`/products/${item.id}`} key={item.id} className={styles.link}>
                <ProductCard item={item} />
            </Link>
        </div>
    ))

    return (

        <SectionLayout
            title={categorie}
            path={[
                { name: "Categories", to: "/categories/all" },
                { name: categorie, to: `/categories/${id}` }]}
        >
            <Filters />
            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.categoriesBox}>
                {elements}
            </div>

        </SectionLayout>

    );
};

export default SingleCategorie;