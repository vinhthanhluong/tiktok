import clsx from 'clsx';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
function MenuItem({ data, onClick }) {
    return (
        <Button to={data.to} className={clsx(styles.menuItem)} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
