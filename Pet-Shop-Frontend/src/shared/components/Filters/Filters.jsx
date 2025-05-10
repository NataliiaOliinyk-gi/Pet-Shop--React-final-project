
import FilterPrice from './FilterPrice/FilterPrice';
import FilterDiscounted from './FilterDiscounted/FilterDiscounted';
import FilterSorted from './FilterSorted/FilterSorted';

import styles from './Filters.module.css';

const Filters = ({ showDiscounted = true }) => {
    return (
        <div className={styles.filtersContainer}>
            <FilterPrice />
            {showDiscounted && <FilterDiscounted />}
            <FilterSorted />
        </div>
    )
};

export default Filters;