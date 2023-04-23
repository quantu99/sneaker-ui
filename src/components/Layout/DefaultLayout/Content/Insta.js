import styles from './Insta.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const items = [
    {
        img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/342059468_194592616669436_8104461474771432423_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QLsu3vwkzmoAX_FK_vG&_nc_ht=scontent.fvca1-3.fna&oh=00_AfA8tin3rFPle6e4gtM2Suy6j2zO0vO3cEFYDlt1G5UjWg&oe=6449A98D',
        time: 'April 20, 2023',
        href: 'https://www.instagram.com/p/CrNhPyZRqGD/',
    },

    {
        img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/341484787_895615498172469_5797731774119303123_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d0Z8C5Mq1u4AX8xSlb4&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDCL7FkzGxJ56pfNE-Acy4f4jEUmbROii76CbSrsIsZjQ&oe=644A6393',
        time: 'April 19, 2023',
        href: 'https://www.instagram.com/p/CrKys1xR-fE/',
    },

    {
        img: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/340643244_6594930380589745_1165942108012260088_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9A5-2JetkNsAX-gnkFD&_nc_ht=scontent.fvca1-2.fna&oh=00_AfDFdQy7S5Lz3A_73J5dMOOo50v-mErvNfGYv3Lb3eBORA&oe=64488AF4',
        time: 'April 17, 2023',
        href: 'https://www.instagram.com/p/CrFHgXMhoIG/',
    },
    {
        img: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/341372169_123920090664258_3301123642442605185_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gZ92tSnF4BwAX91_2O_&_nc_ht=scontent.fvca1-4.fna&oh=00_AfCk4DP_0bT9IXoYxCG5oSI6GNR4AtdRAni7HGehnVEL0Q&oe=6449C355',
        time: 'April 16, 2023',
        href: 'https://www.instagram.com/p/CrDW5ctLVGK/',
    },
    {
        img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/340968056_252195753932340_843565662832099749_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=szL9F5DJODEAX-9_YL_&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDTabhpOu30T5ZG6tYpBuf1tNhxi8OQ_zk5_WnxfyN2UA&oe=644A1AD3',
        time: 'April 16, 2023',
        href: 'https://www.instagram.com/p/CrCwL63SpHT/',
    },
    {
        img: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/340619683_1247117252570362_1625318568237769937_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Lgj-y0_EnTcAX9UvUwH&_nc_ht=scontent.fvca1-4.fna&oh=00_AfAu6D8mzhptMBlGLq1aWcKCL5VQ-rRc2GPwQSJSFKTt0g&oe=6449F08A',
        time: 'April 12, 2023',
        href: 'https://www.instagram.com/p/Cq7_uoOLEkP/',
    },
];
const InstaItems = ({ item }) => (
    <div key={item.href} className={cx('container-2')}>
        <a href={item.href} target="_blank">
            <img className={cx('insta_img')} src={item.img} />
            <div className={cx('insta_time')}>{item.time}</div>
        </a>
    </div>
);
function Insta() {
    return (
        <div className={cx('wrapper')}>
            {items.map((item) => (
                <InstaItems item={item} />
            ))}
        </div>
    );
}

export default Insta;
