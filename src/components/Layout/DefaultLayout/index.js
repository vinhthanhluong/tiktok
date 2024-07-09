import Header from '../components/Header';
import Sidebar from './Sidebar';

import clsx from 'clsx';
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

export default DefaultLayout;
