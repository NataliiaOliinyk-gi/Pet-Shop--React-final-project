
import SectionLayout from '../../../layouts/SectionLayout/SectionLayout';
import Carousel from '../../Carousel/Carousel';

import ModuleTitle from '../../ModuleTitle/ModuleTitle';

import styles from './MainModuleCard.module.css';

const MainModuleCard = ({text, name, to, data, loading, error}) => {

    return (
        <div>
            <SectionLayout>
                <ModuleTitle
                    text={text}
                    name={name}
                    to={to}
                />
                <Carousel data={data} loading={loading} error={error} to={to} name={name} />
            </SectionLayout>
        </div>
    )
};

export default MainModuleCard;