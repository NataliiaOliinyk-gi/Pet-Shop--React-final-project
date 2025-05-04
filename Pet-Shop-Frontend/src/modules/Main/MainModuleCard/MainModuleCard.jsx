
import ModuleTitle from '../../ModuleTitle/ModuleTitle';

import styles from './MainModuleCard.module.css';

const MainModuleCard = () => {


    return (
        <div>
            <ModuleTitle
                text="Categories"
                name='All categories'
                to='/categories'
            />
        </div>
    )
};

export default MainModuleCard;