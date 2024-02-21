'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IconInstagram, IconRightBracket, IconTwitter } from '#/svgs';
import { ManagementUserProfile } from '@/containers/management/ManagementUserProfile';
import { managementUserDataResponse } from '@/types/managementProfile';
import { logout } from '@/services/management';
import useModal from '@/hooks/useModal';

import * as styles from './index.css';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';

const ManagementContainer = ({
  nickname,
  imageUrl,
}: managementUserDataResponse) => {
  const router = useRouter();
  const { openModal, Modal } = useModal();

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  return (
    <>
      <Header title='관리페이지' hasPrevious />
      <main className={styles.managementWrapper}>
        <div className={styles.managementProfile}>
          <ManagementUserProfile nickname={nickname} imageUrl={imageUrl} />
        </div>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.managementListContent}
        >
          <div>팀소개</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.managementListContent}
        >
          <div>공지사항</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://ninth-check-14d.notion.site/jansorry-ceb36c9a19864488b242e8d773094950?pvs=4'
          className={styles.managementListContent}
        >
          <div>자주 하는 질문</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <div
          onClick={openModal}
          className={styles.managementListContent}
          role='presentation'
        >
          <div>로그아웃</div>
          <IconRightBracket />
        </div>
        <Modal title='로그아웃 하시겠어요?'>
          <div className={styles.logoutModalWrapper}>
            <Button
              type='button'
              size='large'
              colorStyle='strongRed'
              filled
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          </div>
        </Modal>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='/management/withdrawal'
          className={styles.managementListContent}
        >
          <div>회원 탈퇴</div>
          <IconRightBracket />
        </Link>
        <hr className={styles.managementSeperateLine} />
        <Link
          href='https://www.instagram.com/jansorry_official/'
          className={styles.managementSnsListContent}
        >
          <IconInstagram />
          <div>인스타그램</div>
        </Link>
        <Link
          href='https://twitter.com/jansorry_S2'
          className={styles.managementSnsListContent}
        >
          <IconTwitter />
          <div>트위터</div>
        </Link>
        <NavBar clickedIndex={3} />
      </main>
    </>
  );
};

export default ManagementContainer;
