import { Link } from 'react-router-dom';;

import SectionLayout from '../../shared/components/SectionLayout/SectionLayout';
import ModuleTitle from '../../shared/components/ModuleTitle/ModuleTitle';
import Button from '../../shared/components/Button/Button';

import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {

    return (
        <SectionLayout>
            <ModuleTitle
                text='Shopping cart'
                name='Back to the store'
                to='/categories'
            />
            <p className={styles.text}>Looks like you have no items in your basket currently.</p>
            <Link to='/categories'>
                <Button text='Continue Shopping' />
            </Link>

        </SectionLayout>
    );
};

export default ShoppingCart;