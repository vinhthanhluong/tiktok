import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
function MenuItem({ data, onClick }) {
    const classes = clsx(styles.menuItem, {
        [styles.separate]: data.separate,
    });
    return (
        <Button to={data.to} className={classes} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
