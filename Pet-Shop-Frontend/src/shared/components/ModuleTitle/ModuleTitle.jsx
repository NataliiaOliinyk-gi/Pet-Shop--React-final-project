
import Title from '../Title/Title';
import NavigationBox from '../NavigationBox/NavigationBox';

import styles from './ModuleTitle.module.css';

const ModuleTitle = ({ text, name, to }) => {

    return (
        <div className={styles.container}>
            <Title text={text} />
            <div className={styles.box}>
                <span className={styles.separator}></span>
                <NavigationBox name={name} to={to} />
            </div>

        </div>
    )
};

export default ModuleTitle;