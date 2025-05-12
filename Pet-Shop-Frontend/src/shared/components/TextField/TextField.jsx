

import styles from './TextField.module.css';

const TextField = ({
    name,
    register,
    rules,
    error,
    ...props }) => {


    return (
        <div>
            <input
                {...register(name, rules)}
                {...props}
                className={styles.textField}
            />
            {error && <p className={styles.textFieldError}>{error.message}</p>}
        </div>
    )
};

export default TextField;