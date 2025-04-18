import { Link, useLocation } from 'react-router-dom';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ path }) => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const crumbs = path || pathnames.map((part, index) => {
        const to = '/' + pathnames.slice(0, index + 1).join('/');
        const name = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '));
        return { name, to };
    });


    return (

        <nav>
            <ul className={styles.breadcrumbList}>
                <li className={styles.breadcrumbItem}>
                    <Link to="/" className={styles.link}>Main page</Link>
                </li>
                {crumbs.map(({ name, to }, index) => (
                    <li key={to} className={styles.breadcrumbItem}>
                        <span className={styles.separator}></span>
                        {index === crumbs.length - 1 ? (
                            <span className={styles.current}>{name}</span>
                        ) : (
                            <Link to={to} className={styles.link}>{name}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Breadcrumbs;