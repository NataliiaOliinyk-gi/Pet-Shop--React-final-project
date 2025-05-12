
import styles from './Button.module.css';

const Button = ({ text, type = "button", width = "auto", onClick }) => {
    return (
        <button
            className={styles.btn}
            type={type}
            style={{ width: `${width}` }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;