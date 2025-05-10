import { Link } from 'react-router-dom';

import styles from './NavigationBox.module.css';

const NavigationBox = ({ name, to, isLast = false, index = 0 }) => {

    return (
        <li className={styles.container}>
            {index > 0 && <span className={styles.separator}></span>}
            {isLast ? (
                <span className={styles.current}>{name}</span>
            ) : (
                <Link to={to} className={styles.link}>{name}</Link>
            )}
        </li>
    )
};

export default NavigationBox;