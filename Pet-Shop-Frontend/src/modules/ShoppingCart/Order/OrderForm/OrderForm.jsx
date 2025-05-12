import { useForm } from 'react-hook-form';

import TextField from '../../../../shared/components/TextField/TextField';
import Button from '../../../../shared/components/Button/Button';

import fields from './fields';

import styles from './OrderForm.module.css';

const OrderForm = ({ submitForm }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.orderForm}>
            <div className={styles.textFieldsBox}>
                <TextField
                    {...fields.name}
                    register={register}
                    error={errors.name}
                />
                <TextField
                    {...fields.phone}
                    register={register}
                    error={errors.phone}
                />
                <TextField
                    {...fields.email}
                    register={register}
                    error={errors.email}
                />
            </div>
            <div className={styles.btnBox}>
                <Button text="Order" type='submit' width="100%" />
            </div>
        </form>
    )
};

export default OrderForm;