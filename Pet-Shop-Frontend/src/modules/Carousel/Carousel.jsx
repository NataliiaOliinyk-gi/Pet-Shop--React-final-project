import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Loader from '../../components/Loader/Loader';
import LoadingError from '../../components/LoadingError/LoadingError';
import CategorieCard from '../Categories/CategorieCard/CategorieCard';
import ProductCard from '../../components/ProductCard/ProductCard';

import { slugify } from '../../utils/slugify';

import styles from './Carousel.module.css';

const Carousel = ({ data, loading, error, to, name }) => {

    const elements = data.map(item => {
        const slug = slugify(item.title)

        return (
            <SwiperSlide>
                <Link to={`${to}/${slug}`} key={item.id} className={styles.link}>
                    {(name === 'All categories') ?
                        (<CategorieCard item={item} />) : (<ProductCard item={item} />)}
                </Link>
            </SwiperSlide>

        )
    });

    return (
        <div>
            <Swiper
                spaceBetween={32}
                slidesPerView={4}
                scrollbar={{ hide: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {elements}
            </Swiper>

            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
        </div>
    )
};

export default Carousel;