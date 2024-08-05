import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Popper.module.scss';

function Wrapper({ children }) {
    return <div className={clsx(styles.wrapper)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
