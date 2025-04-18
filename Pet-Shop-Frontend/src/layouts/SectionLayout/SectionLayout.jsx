
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Title from '../../ui/Title/Title';

import styles from './SectionLayout.module.css';

const SectionLayout = ({ children, title, path }) => {
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {path && <Breadcrumbs path={path} />}
                    {title && <Title text={title} />}
                    {children}
                </div>
            </div>

        </section>
    )
};

export default SectionLayout;