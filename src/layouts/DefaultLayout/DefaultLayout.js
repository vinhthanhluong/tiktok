import PropTypes from 'prop-types';
import clsx from 'clsx';

import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className={clsx('container', styles.dLayout)}>
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
