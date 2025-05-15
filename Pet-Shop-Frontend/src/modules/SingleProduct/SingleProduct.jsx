import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import DiscountBadge from '../../shared/components/DiscountBadge/DiscountBadge';
import Counter from '../../shared/components/Counter/Counter';
import Button from '../../shared/components/Button/Button';
import PriceBox from '../../shared/components/PriceBox/PriceBox';

import { getProductsAll, getProductById } from '../../shared/api/products-api';
import { localUrl } from '../../shared/api/backendInstance';
import { slugify } from '../../shared/utils/slugify'
import { addToCart } from '../../redux/cart/cart-slice';
import { selectCategoriesAll } from '../../redux/categories/categories-selectors';

import styles from './SingleProduct.module.css';

const SingleProduct = () => {

    const [count, setCount] = useState(1);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { id: slug } = useParams();
    const navigate = useNavigate();
    const { categories } = useSelector(selectCategoriesAll);

    const [showFullDescription, setShowFullDescription] = useState(false);
    const descriptionRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: productsAll, error: errorProductsAll } = await getProductsAll();
                if (errorProductsAll) {
                    return setError(errorProductsAll.message);
                }
                const producItem = productsAll.data.find(
                    item => slugify(item.title) === slug.toLowerCase()
                );
                if (!producItem) {
                    navigate('/not-found');
                    return;
                }

                // Отримуємо товар по id
                const { data: productData, error: errorProduct } = await getProductById(producItem.id);
                if (errorProduct) {
                    return setError(errorProduct.message);
                }
                setProduct(productData[0])
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate, slug]);

    // Перевірка чи текст обрізаний
    useEffect(() => {
        const el = descriptionRef.current;
        if (el) {
            const isOverflowing = el.scrollHeight > el.clientHeight;
            setIsTruncated(isOverflowing);
        }
    }, [product.description]);

    const onAddProductToCart = useCallback(((payload) => {
        dispatch(addToCart(payload));
    }), [dispatch]);

    const handleClick = useCallback(() => {
        onAddProductToCart({ ...product, count });
    }, [product, count, onAddProductToCart]);

    const onPlus = useCallback((() => {
        setCount(prev => prev + 1)
    }), [setCount]);

    const onMinus = useCallback((() => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    }), []);

    const toggleDescription = () => {
        setShowFullDescription(prev => !prev);
    };

    const category = categories.find(item => item.id === product.categoryId);
    const breadcrumbsPath = product && category ? [
        { name: 'Main page', to: '/' },
        { name: "Categories", to: "/categories" },
        { name: category.title, to: `/categories/${slugify(category.title)}` },
        { name: product.title, to: `/products/${slug}` },
    ] : null;

    return (
        <SectionLayout showBreadcrumbs path={breadcrumbsPath}>

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
                                        activeText="Added"
                                        width="100%"
                                        onClick={handleClick}
                                    />
                                </div>
                            </div>
                            <div className={styles.descriptionsTextContainer}>
                                <p className={styles.descriptions}>Description</p>
                                <p className={`${styles.descriptionsText} ${showFullDescription ? styles.expanded : ''}`}
                                    ref={descriptionRef}
                                >
                                    {product.description}
                                </p>
                                {isTruncated && (
                                    <button className={styles.readMoreBtn} onClick={toggleDescription}>
                                        {showFullDescription ? 'Read less' : 'Read more'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            }

        </SectionLayout>
    );
};

export default SingleProduct;