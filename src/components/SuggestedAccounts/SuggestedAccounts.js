import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label, popup = false }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.label)}>{label}</p>
            <AccountItem popup={popup} />
            <AccountItem popup={popup} />
            <AccountItem popup={popup} />
            <p className={styles.moreBtn}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
