import React, { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '../Popper';
import { AccountItem } from '../AccountItem';

const cx = classNames.bind(styles);
const Header = () => {
    const [searchResult, setSearchResult] = useState([1, 2, 3]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={!!searchResult && searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} {...attrs}>
                            <PopperWrapper>
                                <div>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false}></input>
                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} color={'#bbb'} />
                        </button>
                        <span className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} color={'#ccc'} />
                        </span>
                        <span className={cx('span-spliter')}></span>
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
};

export default Header;
