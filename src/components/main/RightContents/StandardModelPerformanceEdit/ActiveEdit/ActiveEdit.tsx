'use client';

import styles from './ActiveEdit.module.scss';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import { Flex } from 'antd';
import ElectricHeatPump from '@/components/main/RightContents/StandardModelPerformanceEdit/ActiveEdit/ElectricHeatPump/ElectricHeatPump';

const thermalItems = [
  {
    key: 'window',
    title: 'EHP(전기히트펌프)',
    typeText: '냉방',
    color: '#1D4BBE',
    unit: 'COP',
  },
  {
    key: 'wall',
    title: 'EHP(전기히트펌프)',
    typeText: '난방',
    color: '#BE1D1D',
    unit: 'COP',
  },
  {
    key: 'roof',
    title: 'GHP(가스히트펌프)',
    typeText: '냉방',
    color: '#1D4BBE',
    unit: 'COP',
  },
  {
    key: 'floorGhp',
    title: 'GHP(가스히트펌프)',
    typeText: '난방',
    color: '#BE1D1D',
    unit: 'COP',
  },
  {
    key: 'floorGhp2',
    title: '조명밀도',
    typeText: '조명',
    color: '#F5CA2F',
    unit: 'W/㎡',
  },
  {
    key: 'floorTrade',
    title: '전기보일러',
    typeText: '급탕',
    color: '#F38130',
    unit: '%',
  },
];

const ActiveEdit = (props: any) => {
  return (
    <CollapseItem itemSize={thermalItems.length + 1} title={'액티브'}>
      <Flex className={styles.wrapper} gap={21} wrap={'wrap'}>
        {thermalItems.map((item) => (
          <ElectricHeatPump {...item} />
        ))}
        <ElectricHeatPump
          key={'HeatRecoveryVentilator'}
          type={'HeatRecoveryVentilator'}
          title={'전열교환기'}
          typeText={'환기'}
          color={`#20E6F1`}
          unit={'%'}
        />
      </Flex>
    </CollapseItem>
  );
};

export default ActiveEdit;
