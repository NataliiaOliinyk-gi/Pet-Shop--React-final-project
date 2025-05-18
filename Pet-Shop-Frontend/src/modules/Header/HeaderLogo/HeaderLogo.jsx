import { Link } from 'react-router-dom';

import logo from '../../../assets/logo/logo.svg';

import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
    )
};

export default HeaderLogo;