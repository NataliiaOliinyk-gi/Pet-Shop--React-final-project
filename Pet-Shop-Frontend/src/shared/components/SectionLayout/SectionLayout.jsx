
import Breadcrumbs from '../../../modules/Breadcrumbs/Breadcrumbs';
import Title from '../Title/Title';

import styles from './SectionLayout.module.css';

const SectionLayout = ({ children, title, showBreadcrumbs = false }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {showBreadcrumbs && <Breadcrumbs />}
                {title && <Title text={title} />}
                {children}
            </div>
        </section>
    )
};

export default SectionLayout;