'use client';

import styles from './PassiveEdit.module.scss';
import { Flex } from 'antd';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import WindowThermalTransmittance from '@/components/main/RightContents/StandardModelPerformanceEdit/PassiveEdit/WindowThermalTransmittance/WindowThermalTransmittance';

const thermalItems = [
  {
    key: 'window',
    title: '창호 열관류율',
    // 필요시 props 추가
  },
  {
    key: 'wall',
    title: '외벽 열관류율',
  },
  {
    key: 'roof',
    title: '지붕 열관류율',
  },
  {
    key: 'floor',
    title: '바닥 열관류율',
  },
];

const PassiveEdit = () => {
  return (
    <CollapseItem itemSize={4} title={'패시브'}>
      <Flex className={styles.wrapper} gap={21} wrap={'wrap'}>
        {thermalItems.map((item) => (
          <WindowThermalTransmittance key={item.key} title={item.title} />
        ))}
      </Flex>
    </CollapseItem>
  );
};

export default PassiveEdit;
