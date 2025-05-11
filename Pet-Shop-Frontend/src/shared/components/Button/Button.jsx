
import styles from './Button.module.css';

const Button = ({ text, width = "auto", onClick }) => {
    return (
        <button className={styles.btn} style={{width: `${width}`}} onClick={onClick}>{text}</button>
    );
};

export default Button;