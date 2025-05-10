import { Link } from 'react-router-dom';

import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
    return (
        <Link to="/">
            <img src="../../src/assets/logo/logo.svg" alt="Logo" className={styles.logo} />
        </Link>
    )
};

export default HeaderLogo;