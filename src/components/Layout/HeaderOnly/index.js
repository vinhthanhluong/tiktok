import Header from '../components/Header';

import clsx from 'clsx';
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

export default HeaderOnly;
