
import styles from './Title.module.css';

const Title = ({ text }) => {
    return (
        <>
        {text && <h2 className={styles.title}>{text}</h2>}
        </>
        // <h2 className={styles.title}>{text}</h2>
    );
};

export default Title;