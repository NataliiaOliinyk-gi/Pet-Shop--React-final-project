import { useNavigate } from 'react-router-dom';

import SectionLayout from '../../layouts/SectionLayout/SectionLayout';
import Title from '../../ui/Title/Title';
import Button from '../../ui/Button/Button';

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
                        <img className={styles.img4} src="../../src/assets/svg/4.svg" alt="4" />
                        <img className={styles.imgPets} src="../../src/assets/img/pets.png" alt="Pets" />
                        <img className={styles.img4} src="../../src/assets/svg/4.svg" alt="4" />
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