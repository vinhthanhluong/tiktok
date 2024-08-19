import clsx from 'clsx';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountPreview() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <Image
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                    alt="user name"
                    className={clsx(styles.avatar)}
                />
                <Button primary>Follow</Button>
            </div>
            <div className={clsx(styles.body)}>
                <p className={clsx(styles.nickname)}>
                    <strong>quocnguyenthu</strong>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                </p>
                <p className={clsx(styles.name)}>Quốc Nguyễn Phú</p>
                <p className={clsx(styles.analytics)}>
                    <strong className={clsx(styles.value)}>8.2M</strong>
                    <span className={clsx(styles.label)}>Followers</span>
                    <strong className={clsx(styles.value)}>8.2M</strong>
                    <span className={clsx(styles.label)}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
