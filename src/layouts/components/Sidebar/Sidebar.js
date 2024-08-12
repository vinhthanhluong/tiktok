import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icon';

function Sidebar() {
    return (
        <aside className={clsx(styles.sidebar)}>
            <Menu>
                <MenuItem title="For You" to={config.router.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.router.following} icon={<UserGroupIcon />} />
                <MenuItem title="Live" to={config.router.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
