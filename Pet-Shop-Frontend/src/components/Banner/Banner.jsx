import { Link } from 'react-router-dom';

import Wrapper from '../../layouts/Wrapper/Wrapper';
import Button from '../../ui/Button/Button';

import styles from './Banner.module.css';

const Banner = ({ text }) => {
    return (
        <Wrapper>
            <div className={styles.banner}>
                <img src="../../src/assets/images/banner.png" alt="Banner" className={styles.bannerImage} />
                <div className={styles.content}>
                    <h1 className={styles.title}>{text}</h1>
                    <Link to='/sales'>
                        <Button text="Check out" />
                    </Link>
                </div>

            </div>

            {/* <div className={styles.banner}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>{text}</h1>
                    <Link to='/sales'>
                        <Button text="Check out" />
                    </Link>
                </div>
            </div> */}
        </Wrapper>
    )
};

export default Banner;