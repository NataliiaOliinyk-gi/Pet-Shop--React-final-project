import { Link } from 'react-router-dom';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Button from '../../shared/components/Button/Button';

import bannerImage from '../../assets/images/banner.png';

import styles from './Banner.module.css';

const Banner = ({ text }) => {
    return (
        <Wrapper>
            <div className={styles.banner}>
                <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
                <div className={styles.content}>
                    <h1 className={styles.title}>{text}</h1>
                    <Link to='/sales'>
                        <Button text="Check out" />
                    </Link>
                </div>

            </div>
        </Wrapper>
    )
};

export default Banner;