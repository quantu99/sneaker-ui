import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
// const items = [
//     {
//         img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/340261768_192293440254083_1279033147227164029_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=blZhgqWDMm4AX-sLnMN&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDi_aQsnwMeJGFu4ffKpfbV634zNJq5pS7GDUfpzL_OXw&oe=64340DD6',
//         price: 2850000,
//         name: 'Jordan 1 Mid Black Amarillo Orange',
//         type: 'Shoes',
//     },

//     {
//         img: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/340261835_251959147179969_2639807780897085861_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=rJWOPtqKvHYAX9QIuvz&_nc_ht=scontent.fvca1-2.fna&oh=00_AfDMRX_G5y-pk8BVflYK2Ke7jMELehwaNyBZV6hqZd9d7A&oe=6433811A',
//         price: 4200000,
//         name: 'Jordan 1 Retro High OG Light Smoke Grey ',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/340258882_1217119552499399_3295203818175907614_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KMDt27zJtCQAX8HkdTJ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBUTHc5Fe5cPYHnd2VGGlIMlFQhZh97a7q-esJLRmaiZw&oe=6433F476',
//         price: 4800000,
//         name: 'Gucchi Tennis 1977',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/339460085_1053237105636922_3810480847682156601_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=w9COFYrZfjIAX_OkVN6&_nc_ht=scontent.fvca1-2.fna&oh=00_AfCV6KDDe0k6B2eqAKY4txRANqjtAFuCL22i-9b0rTozQw&oe=64331DDE',
//         price: 850000,
//         name: "Asics Gel PTG MT 'Cream Black' ",
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/338689813_586606516733471_870786126140283126_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=weLD3u4vWhwAX9NqEEF&_nc_ht=scontent.fvca1-4.fna&oh=00_AfAg84KPqn1TEmTfVHBm4CTkbXUaC9C3c8JDHSLOb-JhkQ&oe=64338DF4',
//         price: '850000 - 1050000',
//         name: 'SB Delta Force Valk White',
//         type: 'Shoes',
//     },
// ];

const SearchResultItems = ({ data }) => {
    return (
        <article key={data.id}>
            <Link to={`/sneakers/${data.id}`} className={cx('wrapper-2')}>
                <div className={cx('container')}>
                    <img src={data.img} />
                    <div className={cx('info')}>
                        <h3 className={cx('name')}>{data.name}</h3>
                        <h3 className={cx('price')}>đ {data.price}</h3>
                    </div>
                </div>
            </Link>
        </article>
    );
};
function SearchResult({ data }) {
    return (
        <div className={cx('wrapper')}>
            <SearchResultItems data={data}></SearchResultItems>
        </div>
    );
}

export default SearchResult;
