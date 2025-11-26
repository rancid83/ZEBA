'use client';

import React, { useState } from 'react';
import { Layout, Button, Steps, Modal } from 'antd';
import {
  UserOutlined,
  BellOutlined,
  ShareAltOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './Main.module.scss';
import SectionRight from '@/components/main/RightContents/RightContents';
import { useStore } from '@/store';

const { Header, Content } = Layout;

const MainPage = () => {
  const [modal, contextHolder] = Modal.useModal();
  const [current, setCurrent] = useState(0);

  const {
    setPageStep,
    step1Request,
    step2Request,
    step3Request,
    updateFormData,
  } = useStore();

  const onChange = (value: number) => {
    if (value === 1 && !step1Request) {
      modal.warning({
        title: '알림',
        content: '먼저 ZEB 사전 진단을 완료해주세요.',
        centered: true,
      });
      return;
    }
    if (value === 2 && !step2Request) {
      modal.warning({
        title: '알림',
        content: '먼저 ZEB 목표 설정을 완료해주세요.',
        centered: true,
      });
      return;
    }

    setCurrent(value);
    setPageStep(value);
  };

  const tempAb = () => {
    updateFormData({
      roadName: '서울 강서구 공항대로 220',
      lotNumber: '서울 강서구 마곡동 800-3',
      bld_main_use: '2',
      bld_detail_use: '1',
      bld_al_area: 10000,
      bld_area: 10,
      bld_floor_esurf: 5,
    });
  };

  return (
    <Layout>
      <Header className={styles.styledHeader}>
        <div className={styles.logoSection}>
          <div className="logoContainer headerLogo">
            <img
              className="logoImage"
              src="/assets/images/logo-company.png"
              alt="ZEBA"
            />
            <div className="logoText">
              <span className="zebaText">ZEBA</span>
              <span className="tmText">TM</span>
            </div>
          </div>
        </div>

        <div className={styles.navMenu}>
          <span className={styles.navItem}>홈</span>
          <span className={styles.navItem}>프로젝트</span>
          <span className={styles.navItem}>컨설팅 매칭</span>
          <span className={styles.navItem}>업무 현황</span>
        </div>

        <div className={styles.rightHeaderSection}>
          <Button
            className={styles.iconButton}
            icon={<UserOutlined />}
            onClick={tempAb}
          />
          <Button className={styles.iconButton} icon={<BellOutlined />} />
          <Button className={styles.iconButton} icon={<ShareAltOutlined />} />
          <Button className={styles.iconButton} icon={<UploadOutlined />} />
        </div>
      </Header>

      <Layout className={styles.mainLayout}>
        <Content className={styles.mainContent}>
          <div className={styles.contentContainer}>
            <div className={styles.leftSection}>
              <Steps
                className={styles.customSteps}
                current={current}
                onChange={onChange}
                direction="vertical"
                items={[
                  {
                    title: (
                      <>
                        <span className={styles.numberText}>01</span>
                        <span style={{ marginLeft: '20px' }}>
                          {' '}
                          ZEB 사전 진단
                        </span>
                      </>
                    ),
                    description: '',
                  },
                  {
                    title: (
                      <>
                        <span className={styles.numberText}>02</span>
                        <span style={{ marginLeft: '20px' }}>
                          {' '}
                          ZEB 목표 설정
                        </span>
                      </>
                    ),
                    description: '',
                  },
                  {
                    title: (
                      <>
                        <span className={styles.numberText}>03</span>
                        <span style={{ marginLeft: '20px' }}>
                          {' '}
                          ZEB 성능 편집
                        </span>
                      </>
                    ),
                    description: '',
                  },
                ]}
              />
            </div>
            <div className={styles.rightSection}>
              <SectionRight />
            </div>
          </div>
        </Content>
      </Layout>
      {contextHolder}
    </Layout>
  );
};

export default MainPage;
