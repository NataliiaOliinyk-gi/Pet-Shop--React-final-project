import instagramIcon from '../../assets/icons/social_networks/ic-instagram.svg';
import whatsappIcon from '../../assets/icons/social_networks/ic-whatsapp.svg';

const contacts = [
    {
        title: 'Phone',
        description: '+49 30 915-88492',
    },

    {
        title: 'Socials',
        icons: [
            { href: 'https://instagram.com', icon: instagramIcon },
            { href: 'https://whatsapp.com', icon: whatsappIcon },
        ],
    },

    {
        title: 'Address',
        description: 'Wallstraẞe 9-13, 10179 Berlin, Deutschland',
    },

    {
        title: 'Working Hours',
        description: '24 hours a day',
    }
];

export default contacts;