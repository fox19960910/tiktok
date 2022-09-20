import React from 'react';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" alt="" className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
            </div>
        </div>
    );
}

export default AccountItem;
