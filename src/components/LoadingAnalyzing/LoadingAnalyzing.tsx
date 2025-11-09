import { useEffect } from 'react';
import styles from './LoadingAnalyzing.module.scss';
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingAnalyzing = () => {
  useEffect(() => {
    // 현재 body의 overflow 상태를 저장
    const originalOverflow = document.body.style.overflow;

    // body 스크롤을 잠금
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트될 때 원래 상태로 복원
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.content}>
        <h1 className={styles.zebaTitle}>ZEBA</h1>
        <div className={styles.contactInfo}>
          <p className={styles.email}>egsol@egsol.co.kr</p>
          <p className={styles.address}>
            (주) 이지솔루션즈 서울특별시 강서구 공항대로 220, 우성에스씨타워2
            501호
          </p>
        </div>
      </div>
      <Flex
        className={styles.loadingContainerSpinner}
        justify={'center'}
        align={'center'}
        wrap={'wrap'}
      >
        <span>분석 중</span>
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      </Flex>
    </div>
  );
};

export default LoadingAnalyzing;
