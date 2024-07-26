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
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        // Nếu không có searchValue thì sẽ thoát hàm khi k có searchingValue đi
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

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

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <TippyHeadless
                // appendTo={() => document.body}
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
                        onChange={handleChange}
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
        </div>
    );
}

export default Search;
