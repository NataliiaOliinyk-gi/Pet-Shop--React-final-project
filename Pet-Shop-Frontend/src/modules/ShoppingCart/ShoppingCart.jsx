import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import ModuleTitle from '../../shared/components/ModuleTitle/ModuleTitle';

import CartEmpty from './CartEmpty/CartEmpty';
import CartListItem from './CartListItem/CartListItem';

import { selectCart } from '../../redux/cart/cart-selectors';
import { increaseCountInCart, decreaseCountInCart, deleteFromCart } from '../../redux/cart/cart-slice';

import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {

    const items = useSelector(selectCart);
    const dispatch = useDispatch();

    const onIncreaseCart = useCallback(
        (id) => {
            dispatch(increaseCountInCart(id));
        },
        [dispatch]
    );

    const onDecreaseCart = useCallback(
        (id) => {
            dispatch(decreaseCountInCart(id));
        },
        [dispatch]
    );

    const onDeleteFromCart = useCallback(
        (id) => {
            dispatch(deleteFromCart(id));
        },
        [dispatch]
    );

    const elements = items.map(item =>
        <CartListItem
            key={item.id}
            item={item}
            onIncreaseCart={onIncreaseCart}
            onDecreaseCart={onDecreaseCart}
            onDeleteFromCart={onDeleteFromCart}
        />
    )

    return (
        <SectionLayout>
            <ModuleTitle
                text='Shopping cart'
                name='Back to the store'
                to='/categories'
            />
            {items.length === 0 && <CartEmpty />}

            {items &&
                <div className={styles.cartContainer}>
                    <div className={styles.cartBox}>
                        <ul className={styles.shoppingCart}>{elements}</ul>
                    </div>
                    <div className={styles.orederBox}>

                    </div>
                </div>
            }

        </SectionLayout>
    );
};

export default ShoppingCart;