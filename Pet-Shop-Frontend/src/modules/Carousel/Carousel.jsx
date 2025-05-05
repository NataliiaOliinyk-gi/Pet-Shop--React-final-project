import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom';
import CategorieCard from '../Categories/CategorieCard/CategorieCard';
import ProductCard from '../../components/ProductCard/ProductCard';
// import useFetch from '../../hooks/useFetch';
// import { getCategoriesAll } from '../../api/categories-api';
import { slugify } from '../../utils/slugify';



import styles from './Carousel.module.css';

const Carousel = ({ data, loading, error, to, name }) => {


    const elements = data.map(item => {
        const slug = slugify(item.title);

        return (
            <SwiperSlide>
                <Link to={`${to}${slug}`} key={item.id} className={styles.link}>
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
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                scrollbar={{ hide: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {elements}
            </Swiper>

            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
};

export default Carousel;