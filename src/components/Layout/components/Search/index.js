import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
// Popper || Tippy
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icon';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        // Nếu không có searchValue thì sẽ thoát hàm khi k có searchingValue đi
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleCloseResult = () => {
        setShowResult(false);
    };

    return (
        <TippyHeadless
            interactive={true}
            visible={showResult && searchResult.length > 0}
            placement="bottom"
            render={(attrs) => (
                <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={clsx(styles.searchTitle)}>Accounts</h4>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} onClick={handleCloseResult} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={clsx(styles.search)}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Tìm kiếm"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.which === 32) {
                            e.target.value = e.target.value.replace(/^\s+/, '');
                            if (e.target.value.length === 0) {
                                e.preventDefault();
                            }
                        }
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={clsx(styles.searchClear)} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />}

                <button className={clsx(styles.searchBtn)}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
