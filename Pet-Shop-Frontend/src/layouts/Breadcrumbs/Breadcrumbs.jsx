import { useLocation } from 'react-router-dom';

import NavigationBox from '../../components/NavigationBox/NavigationBox';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const crumbs = [
        { name: 'Main page', to: '/' },
        ...pathnames.map((part, index) => {
            const to = '/' + pathnames.slice(0, index + 1).join('/');
            const name = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '));
            return { name, to };
        })
    ];

    const elements = crumbs.map((item, index) => (
        <NavigationBox
            key={item.to}
            item={item}
            index={index}
            isLast={index === crumbs.length - 1}
        />
    ))

    return (

        <nav>
            <ul className={styles.breadcrumbList}>
                {elements}
            </ul>
        </nav>
    )
};

export default Breadcrumbs;