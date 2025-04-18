import { useId } from 'react';

import CustomSelect from '../CustomSelect/CustomSelect';

// import styles from './FilterSorted.module.css';
import shared from '../../../styles/modules/sharedFilters.module.css';

const FilterSorted = () => {

    const sortedId = useId();

    return (
        <div className={shared.filtersBox}>
            <label htmlFor={sortedId} className={shared.filtersLabel}>Sorted</label>
            <CustomSelect />
        </div>
    )
};

export default FilterSorted;