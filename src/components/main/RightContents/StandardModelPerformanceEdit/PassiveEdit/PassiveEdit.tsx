'use client';

import styles from './PassiveEdit.module.scss';
import { Flex } from 'antd';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import WindowThermalTransmittance from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/WindowThermalTransmittance/WindowThermalTransmittance';

const thermalItems = [
  {
    key: 'window',
    title: '창호 열관류율',
    start: 2.12,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
  },
  {
    key: 'wall',
    title: '외벽 열관류율',
    start: 0.8,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
  },
  {
    key: 'roof',
    title: '지붕 열관류율',
    start: 1.36,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
  },
  {
    key: 'floor',
    title: '바닥 열관류율',
    start: 2,
    min: 0.5,
    max: 3.5,
    step: 0.01,
    average: 1.36,
  },
];

const PassiveEdit = () => {
  return (
    <CollapseItem itemSize={4} title={'패시브'}>
      <Flex className={styles.wrapper} gap={21} wrap={'wrap'}>
        {thermalItems.map((item) => (
          <WindowThermalTransmittance
            key={item.key}
            title={item.title}
            min={item.min}
            max={item.max}
            average={item.average}
            step={item.step}
            start={item.start}
          />
        ))}
      </Flex>
    </CollapseItem>
  );
};

export default PassiveEdit;
