import clsx from 'clsx';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

function AccountItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img
                className={styles.avatar}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e2a0d34d71940773067459da2d4ef05d~c5_300x300.webp?lk3s=a5d48078&nonce=52196&refresh_token=a5598e9f450496d3bdb5808989ea1e67&x-expires=1720749600&x-signature=x3xpbjqnBSzwxI2iM6uAGooCDCI%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={clsx(styles.info)}>
                <h4 className={styles.name}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                </h4>
                <span className={styles.username}>nguyevana</span>
            </div>
        </div>
    );
}

export default AccountItem;
