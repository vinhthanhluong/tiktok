import PropTypes from 'prop-types';
import clsx from 'clsx';

import Header from '../components/Header';
import styles from './HeaderOnly.module.scss';

function HeaderOnly({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="container">
                    <div className={clsx(styles.content)}>{children}</div>
                </div>
            </main>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
