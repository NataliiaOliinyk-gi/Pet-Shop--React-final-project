import { useState, memo } from 'react';
import styles from './Button.module.css';

const Button = ({
    text,
    activeText,
    type = "button",
    width = "auto",
    variant = "default",
    isSubmittedSuccessfully = false,
    onClick }) => {

    const [isActive, setIsActive] = useState(false);

    const className = variant === "white" ? styles.btnWhite : styles.btnPrimary;
    const submittedClass = type === 'submit' && isSubmittedSuccessfully ? styles.submitted : '';

    const handleMouseDown = () => {
        if (type !== 'submit') {
            setIsActive(true);
        }
    }

    const handleMouseUp = () => {
        if (type !== 'submit') {
            setIsActive(false);
        }
    };

    const getButtonText = () => {
        if (isSubmittedSuccessfully && activeText) return activeText;
        if (isActive && activeText) return activeText;
        return text;
    };
    
    return (

        <button
            className={`${styles.btn} ${className} ${submittedClass}`}
            type={type}
            style={{ width: `${width}` }}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {getButtonText()}
        </button>
    );
};

export default memo(Button);