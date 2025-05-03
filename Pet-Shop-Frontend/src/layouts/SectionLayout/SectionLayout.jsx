
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Title from '../../ui/Title/Title';

import styles from './SectionLayout.module.css';

const SectionLayout = ({ children, title, path }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {path && <Breadcrumbs path={path} />}
                {title && <Title text={title} />}
                {children}
            </div>
        </section>
    )
};

export default SectionLayout;