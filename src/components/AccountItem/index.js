import clsx from 'clsx';
//Font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

function AccountItem({ data, ...props }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)} {...props}>
            <Image className={styles.avatar} src={data.avatar} alt={data.full_name} />
            <div className={clsx(styles.info)}>
                <h4 className={styles.name}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />}
                </h4>
                <span className={styles.username}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
