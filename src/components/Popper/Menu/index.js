import PropTypes from 'prop-types';
import clsx from 'clsx';
// Popper || Tippy
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuLabel from './MenuLabel';
import { useState } from 'react';

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    // đặt trùng data để cho parent vs children có thể render map ra mà k cần phải viết thêm 1 lần map
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <TippyHeadless
            delay={[0, 300]}
            // visible
            hideOnClick={hideOnClick}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(styles.menuList)} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <MenuLabel
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, -1));
                                }}
                            />
                        )}
                        <div className={clsx(styles.menuBody)}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={(prev) => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </TippyHeadless>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
