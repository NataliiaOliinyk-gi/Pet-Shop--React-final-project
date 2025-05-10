
import styles from './Button.module.css';

const Button = ({ text, width = "auto" }) => {
    return (
        <button className={styles.btn} style={{width: `${width}`}}>{text}</button>
    );
};

export default Button;