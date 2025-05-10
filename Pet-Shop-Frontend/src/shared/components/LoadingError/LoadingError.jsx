
import styles from './LoadingError.module.css';

const LoadingError = ({ children }) => {
    return (
        <p className={styles.error}>{children}</p>
    );
};

export default LoadingError;