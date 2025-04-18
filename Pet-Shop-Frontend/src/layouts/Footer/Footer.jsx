
import Title from '../../ui/Title/Title';

import contacts from './contacts';

import styles from './Footer.module.css';

const Footer = () => {

    const elements = contacts.map(item => (
        <div className={styles.contactsBox} key={item.title}>
            <p className={styles.title}>{item.title}</p>
            {item.icons ? (
                <div className={styles.socialIcons}>
                    {item.icons.map((icon, index) => (
                        <a 
                        key={index} 
                        href={icon.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                    >
                        <img src={icon.icon} alt="social icon" className={styles.iconImg} />
                    </a>
                    ))}
                </div>
            ) : (
                <p className={styles.description}>{item.description}</p>
            )}
        </div>
    ))

    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <Title text="Contact" />
                <div className={styles.contactsContainer}>
                    <div className={styles.box}>
                        {elements}
                    </div>
                    <div>
                        <img className={styles.map} src="../../src/assets/img/map.png" alt="Map" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;