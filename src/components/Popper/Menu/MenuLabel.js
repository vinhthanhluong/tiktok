import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

function MenuLabel({ title, onBack }) {
    return (
        <div className={clsx(styles.header)}>
            <Button className={clsx(styles.backBtn)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <h4 className={clsx(styles.label)}>{title}</h4>
        </div>
    );
}

export default MenuLabel;
