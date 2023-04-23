import classNames from 'classnames/bind';
import styles from './Top.module.scss';

const cx = classNames.bind(styles);
function Top() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/338139012_753888229509258_2957534042128120308_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=J8gKS7l0MncAX-knpAQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfAV1p00NFqgOrMd8QENbDeO1VpoF22s2QVkys7hXmf0MQ&oe=6432FD6D" />
                <img src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/329896754_520422700298866_7542747251652112165_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_8FNJ6UPAs4AX8VSMez&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBDN4f7RdNABgphMngzARvqyqLo07vG2WUXq4ZOXUfDsA&oe=6433266F" />
            </div>
            <div className={cx('center')}>
                <img src="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/335625779_227295316435571_9034618787647360805_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uoPV_zbotXMAX8ElzFt&_nc_ht=scontent.fvca1-4.fna&oh=00_AfCZlW8n8E2yPN57Xkc-FUJAIYIWZ71pSECXJdYiFaemQA&oe=6432B353" />
                <div className={cx('title')}>BEST SELLER</div>
            </div>
        </div>
    );
}

export default Top;
