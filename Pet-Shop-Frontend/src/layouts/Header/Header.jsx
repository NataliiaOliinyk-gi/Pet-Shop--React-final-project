
import HeaderLogo from './HeaderLogo/HeaderLogo';
import MainMenu from './MainMenu/MainMenu';
import HeaderCart from './HeaderCart/HeaderCart';

import styles from './Header.module.css';

const Header = () => {

    return (
        <header>
            <nav className={styles.nav}>
                <HeaderLogo />
                <MainMenu />
                <HeaderCart />
            </nav>
        </header>
    )
};

export default Header;