
import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import Sales from '../../modules/Sales/Sales';

import styles from './SalesAllPage.module.css';

const SalesAllPage = () => {
    return (
        <main>
            <h2 className={styles.title}>SalesAllPage</h2>
            <Breadcrumbs path={[{ name: "All sales", to: "/sales/all" }]} />
            <Sales />
        </main>
    );
};

export default SalesAllPage;