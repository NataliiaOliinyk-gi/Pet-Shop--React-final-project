import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import DiscountBadge from '../../shared/components/DiscountBadge/DiscountBadge';

import useFetch from '../../shared/hooks/useFetch';

import { getProductById } from '../../shared/api/products-api';
import { localUrl } from '../../shared/api/backendInstance';

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
                    <div className={styles.container}>
                        <div className={styles.imageContainer}
                            style={{ backgroundImage: `url(${localUrl}${product.image})` }}>

                        </div>
                        <div className={styles.descriptionsContainer}>
                            <p className={styles.title}>{product.title}</p>

                            <div className={styles.priceContainer}>
                                <div className={styles.priceBox}>
                                    {product.discont_price ? (
                                        <>
                                            <p className={styles.price}>${product.discont_price}</p>
                                            <p className={styles.discont}>${product.price}</p>

                                        </>
                                    ) : (
                                        <p className={styles.price}>${product.price}</p>
                                    )}
                                </div>
                                {product.discont_price &&
                                    <DiscountBadge price={product.price} discont_price={product.discont_price} />}
                            </div>



                            <div></div>

                            <div>
                                <p className={styles.descriptions}>Description</p>
                                <p className={styles.descriptionsText}>{product.description}</p>
                            </div>



                        </div>

                    </div>
                </>
            }

        </SectionLayout>
    );
};

export default SingleProduct;