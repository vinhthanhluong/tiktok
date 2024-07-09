import clsx from 'clsx';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={clsx(styles.header)}>
            <div className="container">
                <div className={clsx(styles.wrapper)}>
                    {/* Logo */}
                    {/* Search */}
                </div>
            </div>
        </header>
    );
}

export default Header;
