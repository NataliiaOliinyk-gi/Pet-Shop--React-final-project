
import SectionLayout from '../../../shared/components/SectionLayout/SectionLayout';
import Carousel from '../../Carousel/Carousel';
import ModuleTitle from '../../../shared/components/ModuleTitle/ModuleTitle';

import styles from './MainModuleCard.module.css';

const MainModuleCard = ({ text, name, to, data, loading, error }) => {

    return (
            <SectionLayout>
                <ModuleTitle
                    text={text}
                    name={name}
                    to={to}
                />
                <Carousel data={data} loading={loading} error={error} to={to} name={name} />
            </SectionLayout> 
    )
};

export default MainModuleCard;