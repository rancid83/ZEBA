'use client';

import styles from './ActiveEdit.module.scss';
import stylesEdit from '../shared/EditSlider/EditSlider.module.scss';
import CollapseItem from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/CollapseItem/CollapseItem';
import { Flex, Rate } from 'antd';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';

const thermalItems = [
  {
    type: 'template1',
    title: 'EHP(전기히트펌프)',
    start: 4.0,
    min: 2.0,
    max: 6.0,
    step: 0.01,
    average: 4.0,
    rate: 1,
    systemType: '냉방',
    unit: 'COP',
  },
  {
    type: 'template1',
    title: 'EHP(전기히트펌프)',
    start: 3.25,
    min: 1.5,
    max: 5.0,
    step: 0.01,
    average: 3.25,
    rate: 3,
    systemType: '난방',
    unit: 'COP',
  },
  {
    type: 'template1',
    title: 'GHP(가스히트펌프)',
    start: 1.5,
    min: 1.0,
    max: 2.0,
    step: 0.01,
    average: 1.5,
    rate: 1,
    systemType: '냉방',
    unit: 'COP',
  },
  {
    type: 'template1',
    title: 'GHP(가스히트펌프)',
    start: 1.75,
    min: 1.0,
    max: 2.5,
    step: 0.01,
    average: 1.75,
    rate: 1,
    systemType: '난방',
    unit: 'COP',
  },
  {
    type: 'template1',
    title: '조명밀도',
    start: 7.5,
    min: 3.0,
    max: 12.0,
    step: 0.01,
    average: 7.5,
    rate: 3,
    systemType: '조명',
    unit: 'W/m²',
  },
  {
    type: 'template1',
    title: '전기보일러',
    start: 85,
    min: 70,
    max: 100,
    step: 0.01,
    average: 85,
    rate: 1,
    systemType: '급탕',
    unit: '%',
  },
  {
    type: 'template2',
    title: '전열 교환기',
    rate: 1,
    systemType: '환기',
    children: [
      {
        type: 'template2',
        title: '',
        start: 0.6,
        min: 0.4,
        max: 0.8,
        step: 0.01,
        average: 0.6,
        rate: 1,
        unit: '%',
      },
      {
        type: 'template2',
        title: '',
        start: 0.65,
        min: 0.5,
        max: 0.8,
        step: 0.01,
        average: 0.65,
        rate: 1,
        unit: '%',
      },
    ],
  },
];

const ActiveEdit = (props: any) => {
  const systemTypeColor = (systemType: string) => {
    switch (systemType) {
      case '냉방':
        return '#1D4BBE';
      case '난방':
        return '#BE1D1D';
      case '조명':
        return '#F5CA2F';
      case '급탕':
        return '#F38130';
      case '환기':
        return '#20E6F1';
      default:
        return '#1D4BBE';
    }
  };
  return (
    <CollapseItem itemSize={thermalItems.length + 1} title={'액티브'}>
      <Flex className={styles.wrapper} gap={21} wrap={'wrap'}>
        {thermalItems.map((item) => {
          if (item.type !== 'template1') return null;
          return <EditSlider {...item} />;
        })}
        {thermalItems
          .filter((item) => item.type === 'template2')
          .map((item) => {
            return (
              <div className={stylesEdit.editWrap} style={{ width: '100%' }}>
                <Flex justify="space-between" align={'center'}>
                  <span className={stylesEdit.editTitle}>{item.title}</span>
                  <Flex align="center" gap={10}>
                    <div
                      style={{
                        background: `${systemTypeColor(item.systemType)}`,
                      }}
                      className={stylesEdit.typeTextWrapper}
                    >
                      {item.systemType}
                    </div>
                    <Rate
                      disabled
                      count={3}
                      value={item.rate}
                      style={{ direction: 'rtl' }}
                    />
                  </Flex>
                </Flex>
                <Flex justify="space-between" align={'center'}>
                  {(item.children || []).map((child, index) => (
                    <EditSlider {...child} />
                  ))}
                </Flex>
              </div>
            );
          })}
      </Flex>
    </CollapseItem>
  );
};

export default ActiveEdit;
