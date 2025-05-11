
import Title from '../../shared/components/Title/Title';
import LocationMap from '../../shared/components/LocationMap/LocationMap';

import contacts from './contacts';

import styles from './Footer.module.css';

const Footer = () => {

    const addressItem = contacts.find(item => item.title === 'Address');
    const address = addressItem?.description || '';

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
                    {/* <div>
                        <img className={styles.map} src="../../src/assets/images/map.png" alt="Map" />
                    </div> */}
                    <div className={styles.map}>
                        <LocationMap address={address} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;