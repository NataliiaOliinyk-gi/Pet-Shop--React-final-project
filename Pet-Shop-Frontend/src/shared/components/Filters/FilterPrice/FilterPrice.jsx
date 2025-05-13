import { useId } from "react";

import useProductsFilters from "../../../hooks/useProductsFilters";

import styles from './FilterPrice.module.css';
import shared from '../../../styles/modules/sharedFilters.module.css';

const FilterPrice = () => {

    const fromId = useId();
    const toId = useId();

    const { searchParams, setSearchParams, priceFrom, priceTo } = useProductsFilters();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (value) {
            searchParams.set(name, value);
        } else {
            searchParams.delete(name);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className={shared.filtersBox}>
            <label htmlFor={fromId} className={shared.filtersLabel}>Price</label>
            <input
                type="number"
                id={fromId}
                placeholder='from'
                name="priceFrom"
                value={!isNaN(priceFrom) ? String(priceFrom) : ""}
                onChange={handleChange}
                className={styles.field}
            />
            <input
                type="number"
                id={toId}
                placeholder='to'
                name="priceTo"
                value={!isNaN(priceTo) ? String(priceTo) : ""}
                onChange={handleChange}
                className={styles.field}
            />
        </div>
    )
};

export default FilterPrice;