
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
                    <HeaderLogo />
                    <MainMenu />
                    <HeaderCart />
                </nav>
            </Wrapper>
        </header>
    )
};

export default Header;