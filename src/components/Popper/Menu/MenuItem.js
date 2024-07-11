import clsx from 'clsx';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
function MenuItem({ data }) {
    return (
        <Button to={data.to} className={clsx(styles.menuItem)} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
