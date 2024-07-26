import clsx from 'clsx';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMoon,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
// Popper || Tippy
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MenuMore } from '~/components/Popper';
import { UploadIcon, InboxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
import routesConfig from '~/config/routes';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    type: 'modeTheme',
                    title: 'Use device theme',
                },
                {
                    type: 'modeTheme',
                    title: 'Dark mode',
                },
                {
                    type: 'modeTheme',
                    title: 'Light mode',
                },
            ],
        },
    },
];

function Header() {
    let currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;

            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={clsx(styles.header)}>
            <div className="container">
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.logo)}>
                        <Link to={routesConfig.home}>
                            <img src={images.logo} alt="Tiktok" />
                        </Link>
                    </div>

                    <Search />

                    <div className={clsx(styles.actions)}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                    <button className={clsx(styles.actionsBtn)}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                    <button className={clsx(styles.actionsBtn)}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                    <button className={clsx(styles.actionsBtn)}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button to="/upload" text>
                                    Upload
                                </Button>
                                <Button to="/login" primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                    Log in
                                </Button>
                            </>
                        )}

                        <MenuMore items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={clsx(styles.userAvatar)}
                                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                    alt="Nguyen Van A"
                                    fallback={images.logo}
                                />
                            ) : (
                                <>
                                    <button className={clsx(styles.moteBtn)}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                </>
                            )}
                        </MenuMore>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
