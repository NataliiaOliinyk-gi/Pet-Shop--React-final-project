import { useLocation } from 'react-router-dom';

import NavigationBox from '../../shared/components/NavigationBox/NavigationBox';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ path }) => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const crumbs = path || [
        { name: 'Main page', to: '/' },
        ...pathnames.map((part, index) => {
            const to = '/' + pathnames.slice(0, index + 1).join('/');

            // Спеціальні назви
            const specialNames = {
                sales: 'All sales',
                products: 'All products',
            };

            let name;

            if (specialNames[part]) {
                name = specialNames[part];
            } else {
                // Робимо кожне слово з великої літери
                name = decodeURIComponent(
                    part
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                );
            }

            return { name, to };
        })
    ];

    const elements = crumbs.map(({ name, to }, index) => (
        <NavigationBox
            key={to}
            name={name}
            to={to}
            index={index}
            isLast={index === crumbs.length - 1}
        />
    ))

    return (

        <div>
            <ul className={styles.breadcrumbList}>
                {elements}
            </ul>
        </div>
    )
};

export default Breadcrumbs;