import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import DiscountBadge from '../../shared/components/DiscountBadge/DiscountBadge';
import Counter from '../../shared/components/Counter/Counter';
import Button from '../../shared/components/Button/Button';
import PriceBox from '../../shared/components/PriceBox/PriceBox';

import useFetch from '../../shared/hooks/useFetch';

import { getProductById } from '../../shared/api/products-api';
import { localUrl } from '../../shared/api/backendInstance';
import { addToCart } from '../../redux/cart/cart-slice';

import styles from './SingleProduct.module.css';

const SingleProduct = () => {

    const [count, setCount] = useState(1);

    const dispatch = useDispatch();
    const { id: slug } = useParams();
    const productId = slug.split('-')[0];

    const request = useCallback(() => getProductById(productId), [productId]);
    const { data: productData, loading, error } = useFetch({
        request,
        initialData: [],
    });

    const product = productData[0];

    const onAddProductToCart = (payload) => {
        dispatch(addToCart(payload));
    };

    const onPlus = () => {
        setCount(prev => prev + 1)
    };

    const onMinus = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    };

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
                                <PriceBox
                                    discont_price={product.discont_price}
                                    price={product.price}
                                    variant="large"
                                />
                                {product.discont_price &&
                                    <DiscountBadge
                                        price={product.price}
                                        discont_price={product.discont_price}
                                    />}
                            </div>
                            <div className={styles.buttonsBox}>
                                <Counter
                                    count={count}
                                    plus={onPlus}
                                    minus={onMinus}
                                />
                                <div className={styles.btnBox}>
                                    <Button
                                        text="Add to cart"
                                        width="100%"
                                        onClick={() => onAddProductToCart({ ...product, count })}
                                    />
                                </div>
                            </div>

                            <div className={styles.descriptionsTextContainer}>
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