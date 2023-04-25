import SearchResult from '../../SearchResult';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { faCircleCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Search({ productItems }) {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = productItems.filter((product) => {
            return product.name.includes(searchWord);
        });
        setFilteredData(newFilter);
    };
    const handleHideResult = () => {
        setFilteredData([]);
    };
    return (
        <Tippy
            interactive={true}
            placement="bottom"
            visible={filteredData.length > 0}
            render={(attrs) => (
                <div className={cx('under_menu-result')} tabIndex="-1" {...attrs}>
                    <div className={cx('search-result')}>
                        {filteredData.map((product) => (
                            <SearchResult data={product} />
                        ))}
                    </div>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('under_inner-center')}>
                <input
                    onChange={handleFilter}
                    className={cx('center-input')}
                    placeholder="Search entire store here..."
                    spellCheck={false}
                />
                {/* {filteredData && !filteredData.length > 0 && (
                    <FontAwesomeIcon className={cx('icon-1')} icon={faSpinner} />
                )} */}
                {filteredData.length > 0 && <FontAwesomeIcon className={cx('icon-3')} icon={faCircleCheck} />}
                <div className={cx('center-content')}>Search</div>
            </div>
        </Tippy>
    );
}

export default Search;
