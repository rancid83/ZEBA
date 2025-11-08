'use client';

import styles from './StandardModelPerformanceEdit.module.scss';
import { Flex, Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import PassiveEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/PassiveEdit';
import ActiveEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/ActiveEdit/ActiveEdit';
import RenewableEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/RenewableEdit/RenewableEdit';

const StandardModelPerformanceEdit = (props: any) => {
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      size="large"
      items={[
        {
          label: `ZEB 성능 조합`,
          key: '1',
          children: (
            <div className={styles.standardModelPerformanceEdit}>
              <Flex
                className={styles.standardModelPerformanceEditTitle}
                gap={10}
              >
                <SettingOutlined />
                <span>표준 모델 성능 편집</span>
              </Flex>
              <div
                className={styles.standardModelPerformanceEditContentWrapper}
              >
                <div className={styles.standardModelPerformanceEditSubtitle}>
                  <span>
                    ZEB 등급에 영향을 미치는 기술 SPEC을 편집하여 분석이
                    가능합니다.
                  </span>
                  <PassiveEdit />
                  <ActiveEdit />
                  <RenewableEdit />
                </div>
              </div>
            </div>
          ),
          style: { margin: 0 },
        },
      ]}
    />
  );
};

export default StandardModelPerformanceEdit;
