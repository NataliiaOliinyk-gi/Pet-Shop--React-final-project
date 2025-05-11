
import styles from './Counter.module.css';

const Counter = ({ plus, minus, count }) => {

    return (
        <div className={styles.counter}>
            <span onClick={minus} className={styles.box}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                    <path d="M5 12H19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <span className={styles.count}>{count}</span>
            <span onClick={plus} className={styles.box}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5V19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </div>
    )
};

export default Counter;