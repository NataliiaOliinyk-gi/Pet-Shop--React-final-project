import { Link } from 'react-router-dom';

import styles from './NavigationBox.module.css';

const NavigationBox = ({ item, isLast, index }) => {

    return (
        <li className={styles.container}>
            {index > 0 && <span className={styles.separator}></span>}
            {isLast ? (
                <span className={styles.current}>{item.name}</span>
            ) : (
                <Link to={item.to} className={styles.link}>{item.name}</Link>
            )}
        </li>
    )
};

export default NavigationBox;