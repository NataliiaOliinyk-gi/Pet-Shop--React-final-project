import { useId } from 'react';

import styles from './FilterPrice.module.css';
import shared from '../../../styles/modules/sharedFilters.module.css';

const FilterPrice = () => {

    const fromId = useId();
    const toId = useId();

    return (
        <div className={shared.filtersBox}>
            <label htmlFor={fromId} className={shared.filtersLabel}>Price</label>
            <input type="number" placeholder='from' id={fromId} className={styles.field} />
            <input type="number" placeholder='to' id={toId} className={styles.field} />
        </div>
    )
};

export default FilterPrice;