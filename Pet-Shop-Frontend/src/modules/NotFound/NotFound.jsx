import { useNavigate } from 'react-router-dom';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import Title from '../../shared/components/Title/Title';
import Button from '../../shared/components/Button/Button';

import fourSvg from '../../assets/svg/4.svg';
import petsImage from '../../assets/images/pets.png';

import styles from './NotFound.module.css';

const NotFound = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (

        <SectionLayout>
            <div className={styles.wrapper}>

                <div className={styles.container}>
                    <div className={styles.boxImage}>
                        <img className={styles.img4} src={fourSvg} alt="4" />
                        <img className={styles.imgPets} src={petsImage} alt="Pets" />
                        <img className={styles.img4} src={fourSvg} alt="4" />
                    </div>
                    <div className={styles.boxDescription}>
                        <Title className={styles.title} text='Page Not Found' />
                        <p className={styles.text}>We're sorry, the page you requested could not be found.
                            <br /> Please go back to the homepage.</p>
                    </div>
                    <div onClick={handleClick} className={styles.boxBtn}>
                        <Button text='Go Home' />
                    </div>
                </div>

            </div>
        </SectionLayout>
    );
};

export default NotFound;