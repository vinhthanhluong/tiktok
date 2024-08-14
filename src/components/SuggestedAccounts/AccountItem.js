// import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SuggestedAccounts.module.scss';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem({ ...props }) {
    return (
        <div className={clsx(styles.item)}>
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
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
