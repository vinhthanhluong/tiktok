import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className={clsx('container1', styles.dLayout)}>
                    <Sidebar />
                    <div className={clsx(styles.content)}>{children}</div>
                </div>
            </main>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
