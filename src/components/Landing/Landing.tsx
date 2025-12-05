'use client';

import styles from './Landing.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Carousel, ConfigProvider, Layout, Modal, Space } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const router = useRouter();

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setIsDemoModalOpen(false);
  };

  // 메인 페이지로 이동
  const onMoveMain = () => {
    router.push('/main');
  };

  // 페이지 로드 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  // Carousel 스타일 적용
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .ant-carousel .slick-dots {
        bottom: 20px !important;
      }
      
      .ant-carousel .slick-dots li button {
        background: rgba(255, 255, 255, 0.5) !important;
        border-radius: 50% !important;
      }
      
      .ant-carousel .slick-dots li.slick-active button {
        background: white !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <Layout className={styles.wrapper}>
      <Content className={styles.content}>
        {/* 전체 컨텐츠를 감싸는 컨테이너 */}
        <div className={styles.container}>
          {/* 헤더를 컨텐츠 내부로 이동 */}
          <div
            className={`${styles.header} ${isVisible ? styles.animateFadeInDown : ''}`}
          >
            {/* 로고 */}
            <div className="logoContainer landingLogo">
              <img
                src="/assets/images/logo-company.png"
                alt="ZEBA"
                className="logoImage"
              />
              <div className="logoText">
                <span className="zebaText">ZEBA</span>
                <span className="tmText">TM</span>
              </div>
            </div>

            {/* 네비게이션 메뉴 */}
            <div className={styles.menu}>
              <span className={styles.menuItem}>회원 가입</span>
              <span className={styles.menuItem}>로그인</span>
              <span className={styles.menuItem}>요금제</span>
              <span className={styles.menuItem}>고객 문의</span>
            </div>

            {/* 앱스토어 버튼들 */}
            <Space size="small">
              <img
                src="/assets/images/icon/icon-googleplay.png"
                alt="Google Play"
                className={styles.appStoreIcon}
              />
              <img
                src="/assets/images/icon/icon-appstore.png"
                alt="App Store"
                className={styles.appStoreIcon}
              />
            </Space>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.contentFlex}>
              {/* 왼쪽 텍스트 영역 */}
              <div
                className={`${styles.textArea} ${isVisible ? styles.animateFadeInUp : ''}`}
              >
                <h1
                  className={`${styles.title} ${
                    isVisible
                      ? `${styles.animateFadeInUp} ${styles.animateDelay1}`
                      : ''
                  }`}
                >
                  간단한 입력으로 ZEB 등급 예측을
                  <br />단 1분만에!
                </h1>

                <div
                  className={`${styles.description} ${
                    isVisible
                      ? `${styles.animateFadeInUp} ${styles.animateDelay2}`
                      : ''
                  }`}
                >
                  <span className={styles.descriptionSpan}>
                    ZEB(제로에너지건축물)인증 등급 예측부터 의사결정, 컨설턴트
                    매칭까지 한 곳에서
                  </span>
                  <span className={styles.descriptionSpan}>
                    프로젝트에 최적화된 ZEB 시나리오 비교 분석과 비용 리포트를
                    한 번에
                  </span>
                  <span className={styles.descriptionSpan}>
                    이제 표준화된 워크 프로세스로 의사결정 시간을 줄이고, 검증된
                    파트너 컨설턴트와 즉시 연결하세요.
                  </span>
                </div>

                <div
                  className={`${styles.buttonContainer} ${
                    isVisible
                      ? `${styles.animateFadeInUp} ${styles.animateDelay3}`
                      : ''
                  }`}
                >
                  <Space size="large">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: '#6366f1',
                        },
                        components: {
                          Button: {},
                        },
                      }}
                    >
                      <Button
                        type="primary"
                        size="large"
                        className={styles.primaryButton}
                        onClick={onMoveMain}
                      >
                        ZEB 예측 시작하기
                      </Button>
                    </ConfigProvider>
                    <Button
                      type="text"
                      size="large"
                      icon={<PlayCircleOutlined />}
                      className={styles.secondaryButton}
                      onClick={() => setIsDemoModalOpen(true)}
                    >
                      데모 영상 보기
                    </Button>
                  </Space>
                </div>
              </div>

              {/* 오른쪽 이미지 영역 */}
              <div
                className={`${styles.imageArea} ${
                  isVisible
                    ? `${styles.animateScaleIn} ${styles.animateDelay2}`
                    : ''
                }`}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.carouselContainer}>
                    <Carousel
                      autoplay
                      dots={true}
                      autoplaySpeed={3000}
                      swipeToSlide={true}
                      touchMove={true}
                      draggable={true}
                      className={styles.carousel}
                    >
                      <div className={styles.carouselSlide}>
                        <img
                          src="/assets/images/bg/ny.jpg"
                          alt="ZEBA Dashboard Mockup 1"
                          className={styles.carouselImage}
                        />
                      </div>
                      <div className={styles.carouselSlide}>
                        <img
                          src="/assets/images/bg/berlin.jpg"
                          alt="ZEBA Dashboard Mockup 2"
                          className={styles.carouselImage}
                        />
                      </div>
                      <div className={styles.carouselSlide}>
                        <img
                          src="/assets/images/bg/cairo.jpg"
                          alt="ZEBA Dashboard Mockup 3"
                          className={styles.carouselImage}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 데모 영상 모달 */}
        <Modal
          open={isDemoModalOpen}
          footer={null}
          onCancel={handleCloseModal}
          width={880}
          centered
          title="ZEBA 데모 영상"
          destroyOnHidden={true}
        >
          <div className={styles.modalVideo}>
            {isDemoModalOpen && (
              <iframe
                key="demo-video"
                src="https://www.youtube.com/embed/xWlJ5zaWeLI?autoplay=1&rel=0&enablejsapi=1"
                title="ZEBA Demo Video"
                className={styles.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Landing;
