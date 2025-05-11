import { Link } from 'react-router-dom';

import Button from '../../../shared/components/Button/Button';

import styles from './CartEmpty.module.css';

const CartEmpty = () => {
    return (
        <div>
            <p className={styles.text}>Looks like you have no items in your basket currently.</p>
            <Link to='/categories'>
                <Button text='Continue Shopping' />
            </Link>
        </div>
    )
};

export default CartEmpty;