'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/home/index.css';
import { NagCardKeyOptions } from '@/types/nagCard';

import NagCard from '@/components/NagCard/index';

const Empty = () => {
  const router = useRouter();

  const card: NagCardKeyOptions = {
    categoryKey: 0,
    typeKey: 0,
    sizeKey: 2,
    textStyleKey: 0,
  };

  const handleEmptyCardClicked = () => {
    router.push('/category');
  };

  return (
    <div
      className={styles.emptyStyle}
      role='presentation'
      onClick={handleEmptyCardClicked}
    >
      <div className={styles.homeText({ contentType: 'card' })}>
        <NagCard cardOption={card} />
      </div>
      <div className={styles.homeText({ contentType: 'content' })}>
        들으신 잔소리가 없네요
      </div>
      <div className={styles.homeText({ contentType: 'guidance' })}>
        잔소리 카드를 등록하러 가볼까요?
      </div>
    </div>
  );
};

export default Empty;
