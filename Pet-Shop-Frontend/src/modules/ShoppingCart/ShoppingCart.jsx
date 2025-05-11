import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import ModuleTitle from '../../shared/components/ModuleTitle/ModuleTitle';
import Button from '../../shared/components/Button/Button';

import { selectCart } from '../../redux/cart/cart-selectors';

import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {

    const items = useSelector(selectCart);

    const elements = items.map(item =>
        <li key={item.id}>
            <p className={styles.title}>title: {item.title}</p>
            <p className={styles.text}>count: {item.count}</p>
        </li>
    )

    return (
        <SectionLayout>
            <ModuleTitle
                text='Shopping cart'
                name='Back to the store'
                to='/categories'
            />
            {!items &&
                <div>
                    <p className={styles.text}>Looks like you have no items in your basket currently.</p>
                    <Link to='/categories'>
                        <Button text='Continue Shopping' />
                    </Link>
                </div>}

            {items &&
                <ul>
                    {elements}
                </ul>}

        </SectionLayout>
    );
};

export default ShoppingCart;