import { useState, useCallback, memo } from 'react';
import { useForm } from 'react-hook-form';

import TextField from '../../../shared/components/TextField/TextField';
import Button from '../../../shared/components/Button/Button';

import fields from './fields';

import styles from './Form.module.css';

const Form = ({ submitForm, variant = 'default', text, activeText }) => {

    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = useCallback((values => {
        submitForm(values);
        setSubmitted(true);
        reset();
    }), [submitForm, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.textFieldsBox}>
                <TextField
                    {...fields.name}
                    register={register}
                    error={errors.name}
                    variant={variant}
                />
                <TextField
                    {...fields.phone}
                    register={register}
                    error={errors.phone}
                    variant={variant}
                />
                <TextField
                    {...fields.email}
                    register={register}
                    error={errors.email}
                    variant={variant}
                />
            </div>
            <div className={styles.btnBox}>
                <Button
                    text={text}
                    activeText={activeText}
                    type='submit'
                    width="100%"
                    variant={variant}
                    isSubmittedSuccessfully={submitted}
                />
            </div>
        </form>
    )
};

export default memo(Form);