import { useState } from 'react';

import optionsSorted from './options';

import styles from './CustomSelect.module.css';

const CustomSelect = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setselected] = useState(optionsSorted[0]);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleSelected = (option) => {
        // setIsOpen(false);
        setselected(option);
    };

    const elements = optionsSorted.map((item) => (
        <li
            key={item.value}
            onClick={() => handleSelected(item)}
            className={`${styles.option} ${selected.value === item.value ? styles.selected : ''}`}
        >
            {item.text}
        </li>
    ));

    return (
        <div className={styles.selectWrapper}>
            <button className={styles.selectButton} onClick={toggleDropdown} type='button'>
                {selected.text}
                <svg
                    className={isOpen ? styles.arrowUp : styles.arrowDown}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d={isOpen ? "M16 12.9998L10 6.99992L4 12.9998" : "M16 7L10 12.9998L4 7"}
                        stroke="#282828"
                        strokeWidth="1.34998"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {isOpen && (
                    <ul className={styles.dropdown}>
                        {elements}
                    </ul>
                )}
            </button>
        </div>
    )
};

export default CustomSelect;