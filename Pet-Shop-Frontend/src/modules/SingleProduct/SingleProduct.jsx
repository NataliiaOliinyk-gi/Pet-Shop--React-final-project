import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';

import useFetch from '../../hooks/useFetch';

import { getProductById } from '../../api/products-api';

import { localUrl } from '../../api/backendInstance';

import styles from './SingleProduct.module.css';

const SingleProduct = () => {

    const { id: slug } = useParams();
    const productId = slug.split('-')[0];

    const request = useCallback(() => getProductById(productId), [productId]);
    const { data: productData, loading, error } = useFetch({
        request,
        initialData: [],
    });

    const product = productData[0];

    return (
        <SectionLayout showBreadcrumbs>

            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}

            {product &&
                <>
                    <div className={styles.imageBox}>
                        <img src={`${localUrl}${product.image}`} alt={product.title} className={`img-fluid ${styles.image}`} />
                    </div>
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.title}>{product.description}</p>
                    <p className={styles.price}>${product.discont_price}</p>
                    <p className={styles.discont}>${product.price}</p>
                </>}

        </SectionLayout>
    );
};

export default SingleProduct;