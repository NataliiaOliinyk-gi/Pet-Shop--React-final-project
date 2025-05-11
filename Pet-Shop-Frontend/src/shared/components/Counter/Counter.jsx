
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';

import styles from './Counter.module.css';

const Counter = ({ plus, minus, count }) => {

    return (
        <div className={styles.counter}>
            <span onClick={minus} className={styles.box}>
                <MinusIcon />
            </span>
            <span className={styles.count}>{count}</span>
            <span onClick={plus} className={styles.box}>
                <PlusIcon />
            </span>
        </div>
    )
};

export default Counter;