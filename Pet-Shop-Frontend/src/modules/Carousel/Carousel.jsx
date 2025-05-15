import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import CategorieCard from '../Categories/CategorieCard/CategorieCard';
import ProductCard from '../../shared/components/ProductCard/ProductCard';

import { slugify } from '../../shared/utils/slugify';

import styles from './Carousel.module.css';

const Carousel = ({ data, loading, error, to, name }) => {

    const swiperRef = useRef(null);

    const elements = data.map(item => {
        const slug = slugify(item.title)

        return (
            <SwiperSlide
                key={item.id}
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >

                {(name === 'All categories') ?
                    (<Link to={`${to}/${slug}`} className={styles.link}>
                        <CategorieCard item={item} />
                    </Link>) : <ProductCard item={item} />
                }
            </SwiperSlide>
        )
    });

    return (
        <div>
            <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={32}
                slidesPerView={4}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1360: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                    560: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
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