import { useState } from 'react';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Form from '../../shared/components/Form/Form';
import Loader from '../../shared/components/Loader/Loader';
import LoadingError from '../../shared/components/LoadingError/LoadingError';
import Modal from '../../shared/components/Modal/Modal';

import { saleSendApi } from '../../shared/api/sale-api';
import { modalTitle, modalText } from './modalText';

import styles from './DiscountForm.module.css';

const DiscountForm = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const submitForm = async payload => {
        setLoading(true)
        const { error } = await saleSendApi(payload);
        setLoading(false);
        if (error) {
            return setError(error.message);
        }
        toggleModal();
    }

    const closeModal = () => {
        toggleModal();
    };

    const toggleModal = () => {
        setShowModal((prevState) => !prevState);
    };

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.discountFormContainer}>
                    <h2 className={styles.title}>5% off on the first order</h2>
                    <div className={styles.formContainer}>
                        <div className={styles.images}></div>
                        <div className={styles.formBox}>
                            <Form
                                variant="white"
                                text="Get a discount"
                                activeText="Request Submitted"
                                submitForm={submitForm}
                            />
                        </div>
                    </div>
                </div>
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
                {showModal && (
                    <Modal close={closeModal} title={modalTitle} text={modalText} />
                )}
            </div>
        </Wrapper>
    )
};

export default DiscountForm;