import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

import mainMenuItems from './mainMenuItems';

import styles from './MainMenu.module.css';

const MainMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const elements = mainMenuItems.map(({ id, href, text }) => (
        <li key={id}>
            <NavLink to={href} className={styles.link} onClick={closeMenu}>
                {text}
            </NavLink>
        </li>
    ))

    return (

        <div className={styles.menuWrapper}>
            <button className={styles.burgerBtn} onClick={toggleMenu}>
                {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>

            <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
                {elements}
            </ul>
        </div>
    );
};

export default MainMenu;