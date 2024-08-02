import clsx from 'clsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <aside className={clsx(styles.sidebar)}>
            <h2>Sidebar </h2>
        </aside>
    );
}

export default Sidebar;
