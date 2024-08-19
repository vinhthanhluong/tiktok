// import PropTypes from 'prop-types';
import clsx from 'clsx';
// Popper || Tippy
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

function AccountItem({ ...props }) {
    const renderPreview = () =>
        props.popup && (
            <div className={clsx(styles.preview)} tabIndex="-1">
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    return (
        // Using a wrapper <> <div> tag around the reference element solves this by creating a new parentNode context.
        <div className={clsx(styles.item)}>
            <TippyHeadless
                delay={[600, 0]}
                // visible
                hideOnClick={false}
                interactive={true}
                placement="bottom-end"
                offset={[0, 0]}
                render={renderPreview}
            >
                <div className={clsx(styles.wrap)}>
                    <Image
                        className={clsx(styles.avatar)}
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                        alt="User Avatar"
                    />
                    <div className={clsx(styles.itemInfo)}>
                        <p className={clsx(styles.username)}>
                            <strong>username</strong>
                            <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                        </p>
                        <p className={clsx(styles.name)}>name</p>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
