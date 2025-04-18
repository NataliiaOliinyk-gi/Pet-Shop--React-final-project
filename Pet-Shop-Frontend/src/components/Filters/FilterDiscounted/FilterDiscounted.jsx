import { useId } from 'react';

import styles from './FilterDiscounted.module.css';
import shared from '../../../styles/modules/sharedFilters.module.css';

const FilterDiscounted = () => {
    const checkId = useId();

    return (
        <div className={shared.filtersBox}>
            <label htmlFor={checkId} className={shared.filtersLabel}>Discounted items</label>
            <label className={styles.customCheckbox}>
                <input type="checkbox" id={checkId} className={styles.checkboxInput} />
                <span className={styles.checkboxBox}>
                    {/* SVG бордера */}
                    <svg
                        className={styles.checkboxBorder}
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H30C33.0376 0.5 35.5 2.96243 35.5 6V30C35.5 33.0376 33.0376 35.5 30 35.5H6C2.96243 35.5 0.5 33.0376 0.5 30V6Z"
                            stroke="#DDDDDD"
                        />
                    </svg>

                    {/* SVG галочки (тільки при checked) */}
                    <svg
                        className={styles.checkboxCheck}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 6L9 17L4 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </label>
        </div>
    )
};

export default FilterDiscounted;