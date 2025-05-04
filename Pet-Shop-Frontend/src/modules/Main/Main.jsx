

import Banner from '../../components/Banner/Banner';

import MainModuleCard from './MainModuleCard/MainModuleCard';

import styles from './Main.module.css';

const Main = () => {
    return (
        <section>
            <Banner text="Amazing Discounts on Pets Products!" />
            <MainModuleCard />
        </section>
    )
};

export default Main;