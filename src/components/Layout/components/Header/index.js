import { useState, useEffect } from 'react';
import clsx from 'clsx';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMoon,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
// Popper || Tippy
import Tippy from '@tippyjs/react/';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { MenuMore } from '~/components/Popper';
import { SearchIcon, UploadIcon, InboxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';

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

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            // setSearchResult([1, 2, 3]);
            setSearchResult([]);
        }, 0);
    }, []);

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
                        <Link to="/">
                            <img src={images.logo} alt="Tiktok" />
                        </Link>
                    </div>
                    <TippyHeadless
                        interactive={true}
                        visible={searchResult.length > 0}
                        placement="bottom"
                        render={(attrs) => (
                            <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={clsx(styles.searchTitle)}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={clsx(styles.search)}>
                            <input type="text" placeholder="Tìm kiếm" spellCheck={false} />
                            <button className={clsx(styles.searchClear)}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />

                            <button className={clsx(styles.searchBtn)}>
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                                <SearchIcon />
                            </button>
                        </div>
                    </TippyHeadless>
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
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e2a0d34d71940773067459da2d4ef05d~c5_300x300.webp?lk3s=a5d48078&nonce=52196&refresh_token=a5598e9f450496d3bdb5808989ea1e67&x-expires=1720749600&x-signature=x3xpbjqnBSzwxI2iM6uAGooCDCI%3D&shp=a5d48078&shcp=c1333099"
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
