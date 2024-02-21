import { cookies } from 'next/headers';

import type { Metadata } from 'next';
import SharedReceipt from '@/containers/sharereceipt';
import {
  flattenNags,
  parsingReceiptContent,
  parsingReceiptDataArray,
} from '@/utils/drawReceipt';
import { getNagCategory } from '@/services/nag';

interface metaProps {
  params: { target: 'family' | 'friend' };
  searchParams: { [key: string]: string };
}

//  동적 오픈그래프 생성 및 설정
export const generateMetadata = ({
  params,
  searchParams,
}: metaProps): Metadata => {
  const { description, title } = searchParams;

  return {
    openGraph: {
      title,
      description: `${description}의 잔소리 영수증!`,
      images: 'https://jansorry.com/opengraph-image.png',
    },
  };
};

const ShareReceipt = async ({ params, searchParams }: metaProps) => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const allNagsArray = await getNagCategory(refreshToken);

  //  잔소리 배열 + url 상의 잔소리 내역
  const dataArray = parsingReceiptDataArray({
    urlParams: searchParams,
    categoryArray: flattenNags(allNagsArray),
  });

  //  잔소리 영수증에 필요한 Content로 재구성
  const receiptContent = parsingReceiptContent(
    params.target,
    dataArray,
    searchParams,
  );

  return <SharedReceipt content={receiptContent} />;
};

export default ShareReceipt;
