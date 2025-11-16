'use client';

import styles from './PassiveEdit.module.scss';
import { Flex } from 'antd';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';

const thermalItems = [
  {
    id: 'windowUValue',
    type: 'template1',
    title: '창호 열관류율',
    start: 2,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 2,
    rate: 3,
  },
  {
    id: 'wallUValue',
    type: 'template1',
    title: '외벽 열관류율',
    start: 0.25,
    min: 0.0,
    max: 0.5,
    step: 0.01,
    average: 0.25,
    rate: 1,
  },
  {
    id: 'roofUValue',
    type: 'template1',
    title: '지붕 열관류율',
    start: 0.5,
    min: 0.0,
    max: 1.0,
    step: 0.01,
    average: 0.5,
    rate: 1,
  },
  {
    id: 'floorUValue',
    type: 'template1',
    title: '바닥 열관류율',
    start: 0.25,
    min: 0.0,
    max: 0.5,
    step: 0.01,
    average: 0.25,
    rate: 1,
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
