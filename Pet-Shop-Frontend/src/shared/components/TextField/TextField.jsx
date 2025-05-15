
import styles from './TextField.module.css';

const TextField = ({
    variant = 'default',
    name,
    register,
    rules,
    error,
    ...props }) => {

    const variantClass = variant === 'white' ? styles.textFieldWhite : '';

    return (
        <div>
            <input
                {...register(name, rules)}
                {...props}
                className={`${styles.textField} ${variantClass}`}
            />
            {error && <p className={styles.textFieldError}>{error.message}</p>}
        </div>
    )
};

export default TextField;