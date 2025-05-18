
import Wrapper from '../../shared/components/Wrapper/Wrapper';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import MainMenu from './MainMenu/MainMenu';
import HeaderCart from './HeaderCart/HeaderCart';

import styles from './Header.module.css';

const Header = () => {

    return (
        <header>
            <Wrapper>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <HeaderLogo />
                    </div>
                    <div className={styles.menu}>
                        <MainMenu />
                    </div>
                    <div className={styles.cart}>
                        <HeaderCart />
                    </div>
                </nav>
            </Wrapper>
        </header>
    )
};

export default Header;