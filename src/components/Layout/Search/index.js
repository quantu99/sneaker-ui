import SearchResult from '../../SearchResult';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import useDebounce from '../../../hooks/useDebounce';
import classNames from 'classnames/bind';
import { faCircleCheck, faCircleQuestion, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Search() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const debounced = useDebounce(searchValue, 500);
    const handleHideResult = () => {
        setSearchValue('');
    };
    useEffect(() => {
        fetch(`http://localhost:3000/data?brand=${encodeURIComponent(debounced)}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, [debounced]);
    return (
        <Tippy
            interactive={true}
            placement="bottom"
            visible={showResult && products.length > 0}
            render={(attrs) => (
                <div className={cx('under_menu-result')} tabIndex="-1" {...attrs}>
                    <div className={cx('search-result')}>
                        {products.map((product) => (
                            <SearchResult data={product} />
                        ))}
                    </div>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('under_inner-center')}>
                <input
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={cx('center-input')}
                    placeholder="Search entire store here..."
                    spellCheck={false}
                />
                {searchValue && !products.length > 0 && <FontAwesomeIcon className={cx('icon-1')} icon={faSpinner} />}
                {/* {searchValue && !loading && !seacrhResult.length > 0 && (
                    <FontAwesomeIcon onClick={() => setSearchValue('')} className={cx('icon-2')} icon={faCircleXmark} />
                )} */}
                {products.length > 0 && <FontAwesomeIcon className={cx('icon-3')} icon={faCircleCheck} />}
                <div className={cx('center-content')}>Search</div>
            </div>
        </Tippy>
    );
}

export default Search;
