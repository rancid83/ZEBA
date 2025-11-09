'use client';

import React, { useEffect } from 'react';
import { Layout, Button, Steps } from 'antd';
import {
  UserOutlined,
  BellOutlined,
  ShareAltOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './Main.module.scss';
import SectionRight from '@/components/main/RightContents/RightContents';

const { Header, Content } = Layout;

const MainPage = () => {
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
                progressDot
                direction="vertical"
                current={1}
                items={[
                  {
                    title: 'Finished',
                    description: 'This is a description.',
                  },
                  {
                    title: 'In Progress',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Waiting',
                    description: 'This is a description.',
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
