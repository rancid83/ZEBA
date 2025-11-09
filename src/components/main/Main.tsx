'use client';

import React, { useState } from 'react';
import { Layout, Button, Steps } from 'antd';
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
  const [current, setCurrent] = useState(0);

  const {
    setPageStep,
    pageStep,
    updateGradeBuildingData,
    updateGradeDataPercent,
  } = useStore();

  const onChange = (value: number) => {
    setCurrent(value);
    setPageStep(value);

    switch (value) {
      case 0:
        break;
      case 1:
        // Perform actions for step 1
        break;
      case 2:
        // Perform actions for step 2
        break;
      default:
        break;
    }
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
              <span className="zebaText">Zeba</span>
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
          <Button className={styles.iconButton} icon={<UserOutlined />} />
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
                current={current}
                onChange={onChange}
                direction="vertical"
                items={[
                  {
                    title: '의무 등급 분석',
                    description: '[ AI 성능 분석 ]',
                  },
                  {
                    title: '표준 등급 분석',
                    description: '[ AI 분석 ]',
                  },
                  {
                    title: '성능 조합 등급 분석',
                    description: '[ AI 성능 분석 ]',
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
    </Layout>
  );
};

export default MainPage;
