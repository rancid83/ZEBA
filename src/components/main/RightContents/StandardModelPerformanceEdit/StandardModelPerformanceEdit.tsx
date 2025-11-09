'use client';

import styles from './StandardModelPerformanceEdit.module.scss';
import { Button, Flex, Tabs } from 'antd';
import { DingtalkOutlined, SettingOutlined } from '@ant-design/icons';
import PassiveEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/PassiveEdit';
import ActiveEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/ActiveEdit/ActiveEdit';
import RenewableEdit from '@/components/main/RightContents/StandardModelPerformanceEdit/RenewableEdit/RenewableEdit';
import React from 'react';
import { useStore } from '@/store';

const StandardModelPerformanceEdit = (props: any) => {
  const {
    setLoading,
    updateGradeData,
    updateGradeBuildingData,
    updateGradeDataPercent,
    pageStep,
  } = useStore();

  const handleRequestAnalysis = () => {
    setLoading(true);

    //임시
    if (pageStep === 0) {
      updateGradeData(0, {
        creator: 8.1,
        consume: 185.8,
        grade: 4.2,
        zebGrade: 5,
      });

      updateGradeData(1, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeBuildingData(0, {
        zebGrade: 0,
        grade: 294922,
        renewable: 13543,
        active: 179810,
        passive: 101569,
        increase: 0,
        benefit: 0,
      });

      updateGradeBuildingData(1, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeDataPercent(0, {
        renewable: (13543 / 387938) * 100,
        active: (179810 / 387938) * 100,
        passive: (101569 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(1, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });
    }

    if (pageStep === 1) {
      updateGradeData(0, {
        creator: 8.1,
        consume: 185.8,
        grade: 4.2,
        zebGrade: 5,
      });

      updateGradeData(1, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeData(2, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeBuildingData(0, {
        zebGrade: 0,
        grade: 294922,
        renewable: 13543,
        active: 179810,
        passive: 101569,
        increase: 0,
        benefit: 0,
      });

      updateGradeBuildingData(1, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeBuildingData(2, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeDataPercent(0, {
        renewable: (13543 / 387938) * 100,
        active: (179810 / 387938) * 100,
        passive: (101569 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(1, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(2, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });
    }

    if (pageStep === 2) {
      updateGradeData(0, {
        creator: 8.1,
        consume: 185.8,
        grade: 4.2,
        zebGrade: 5,
      });

      updateGradeData(1, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeData(2, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeData(3, {
        creator: 33.8,
        consume: 129.0,
        grade: 20.8,
        zebGrade: 5,
      });

      updateGradeBuildingData(0, {
        zebGrade: 0,
        grade: 294922,
        renewable: 13543,
        active: 179810,
        passive: 101569,
        increase: 0,
        benefit: 0,
      });

      updateGradeBuildingData(1, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeBuildingData(2, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeBuildingData(3, {
        zebGrade: 5,
        grade: 387938,
        renewable: 46636,
        active: 227056,
        passive: 114246,
        increase: 93016,
        benefit: 0,
      });

      updateGradeDataPercent(0, {
        renewable: (13543 / 387938) * 100,
        active: (179810 / 387938) * 100,
        passive: (101569 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(1, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(2, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });

      updateGradeDataPercent(3, {
        renewable: (46636 / 387938) * 100,
        active: (227056 / 387938) * 100,
        passive: (114246 / 387938) * 100,
        totalMoney: 387938,
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  };
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
              <Flex justify={'right'} className={'requestButton'}>
                <Button
                  type={'primary'}
                  icon={<DingtalkOutlined />}
                  onClick={handleRequestAnalysis}
                >
                  ZEB [의무 등급] 분석 요청
                </Button>
              </Flex>
            </div>
          ),
          style: { margin: 0 },
        },
      ]}
    />
  );
};

export default StandardModelPerformanceEdit;
