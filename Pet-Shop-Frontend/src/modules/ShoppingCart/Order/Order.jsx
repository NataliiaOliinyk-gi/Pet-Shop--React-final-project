import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../../../shared/components/Loader/Loader';
import LoadingError from '../../../shared/components/LoadingError/LoadingError';
import Modal from '../../../shared/components/Modal/Modal';

import OrderTitle from './OrderTitle/OrderTitle';
import Form from '../../../shared/components/Form/Form';

import { selectCart, selectTotalCartItems, selectTotalCartPrice } from '../../../redux/cart/cart-selectors';
import { clearCart } from '../../../redux/cart/cart-slice';
import { orderSendApi } from '../../../shared/api/order-api';

import { modalTitle, modalText } from './modalText';

import styles from './Order.module.css';

const Order = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const cartItems = useSelector(selectCart);
    const totalCount = useSelector(selectTotalCartItems);
    const totalPrice = useSelector(selectTotalCartPrice);

    const dispatch = useDispatch();

    const submitForm = async order => {
        const payload = { ...order, products: cartItems }
        setLoading(true)
        const { error } = await orderSendApi(payload);
        setLoading(false);
        if (error) {
            return setError(error.message);
        }
        toggleModal();
    }

    const closeModal = () => {
        toggleModal();
        dispatch(clearCart());
    };

    const toggleModal = () => {
        setShowModal((prevState) => !prevState);
    };

    return (
        <div className={styles.orderContainer}>
            <OrderTitle count={totalCount} sum={totalPrice} />
            <Form submitForm={submitForm} text="Order" activeText="The Order is Placed"/>
            <Loader loading={loading} />
            {error && <LoadingError>{error}</LoadingError>}
            {showModal && (
                <Modal close={closeModal} title={modalTitle} text={modalText} />
            )}
        </div>
    )
};

export default Order;