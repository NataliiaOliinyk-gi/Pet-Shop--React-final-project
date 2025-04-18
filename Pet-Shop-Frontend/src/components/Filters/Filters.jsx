
import FilterPrice from './FilterPrice/FilterPrice';
import FilterDiscounted from './FilterDiscounted/FilterDiscounted';
import FilterSorted from './FilterSorted/FilterSorted';

import styles from './Filters.module.css';

const Filters = ()=>{
    return (
        <div className={styles.filtersContainer}>
            <FilterPrice />
            <FilterDiscounted />
            <FilterSorted />
        </div>
    )
};

export default Filters;