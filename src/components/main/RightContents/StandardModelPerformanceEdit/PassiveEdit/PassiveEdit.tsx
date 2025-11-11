'use client';

import styles from './PassiveEdit.module.scss';
import { Flex } from 'antd';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';

const thermalItems = [
  {
    type: 'template1',
    title: '창호 열관류율',
    start: 2.12,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
    rate: 1,
  },
  {
    type: 'template1',
    title: '외벽 열관류율',
    start: 0.8,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
    rate: 3,
  },
  {
    type: 'template1',
    title: '지붕 열관류율',
    start: 1.36,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
    rate: 2,
  },
  {
    type: 'template1',
    title: '바닥 열관류율',
    start: 2,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
    rate: 2,
  },
];

const PassiveEdit = () => {
  return (
    <CollapseItem itemSize={4} title={'패시브'}>
      <Flex className={styles.wrapper} gap={21} wrap={'wrap'}>
        {thermalItems.map((item) => {
          if (item.type !== 'template1') return null;
          return <EditSlider {...item} />;
        })}
      </Flex>
    </CollapseItem>
  );
};

export default PassiveEdit;
