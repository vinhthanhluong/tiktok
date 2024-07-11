import { useState, useEffect } from 'react';
import clsx from 'clsx';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faMoon,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
// Popper || Tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { MenuMore } from '~/components/Popper';

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
    },
];

function Header() {
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

    return (
        <header className={clsx(styles.header)}>
            <div className="container">
                <div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.logo)}>
                        <Link to="/">
                            <img src={images.logo} alt="Tiktok" />
                        </Link>
                    </div>
                    <Tippy
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
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    <div className={clsx(styles.actions)}>
                        <Button to="/upload" text>
                            Upload
                        </Button>
                        <Button to="/login" primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                            Log in
                        </Button>
                        <MenuMore items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={clsx(styles.moteBtn)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </MenuMore>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
