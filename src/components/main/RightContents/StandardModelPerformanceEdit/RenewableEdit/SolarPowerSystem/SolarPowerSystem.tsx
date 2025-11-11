'use client';

import styles from './SolarPowerSystem.module.scss';
import { Flex, Rate, Select } from 'antd';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';

const thermalItems = [
  {
    type: 'template2',
    title: '태양광 발전 시스템',
    rate: 2,

    children: [
      {
        type: 'template2',
        title: '',
        start: 87.8,
        min: 70,
        max: 100,
        step: 0.1,
        average: 85,
        rate: 1,
        unit: '%',
        subDescription: '설치 용량',
      },
      {
        type: 'template2',
        title: '',
        start: 87.8,
        min: 70,
        max: 100,
        step: 0.1,
        average: 85,
        rate: 1,
        unit: '%',
        subDescription: '발전 효율',
      },
    ],
  },
];

const SolarPowerSystem = (props: any) => {
  return (
    <div className={styles.editWrap}>
      <Flex justify="space-between" align={'center'}>
        <span className={styles.editTitle}>{thermalItems[0].title}</span>
        <Rate
          disabled
          value={thermalItems[0].rate}
          count={3}
          style={{ direction: 'rtl' }}
        />
      </Flex>
      <Flex gap={20} style={{ marginTop: '42px', marginBottom: '8px' }}>
        <Flex justify="center" align={'center'} gap={15}>
          <span className={styles.label}>기울기</span>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: 'jack', label: '45%' },
              { value: 'lucy', label: '55%' },
              { value: 'Yiminghe', label: '65%' },
              { value: 'disabled', label: '75%' },
            ]}
          />
        </Flex>
        <Flex justify="center" align={'center'} gap={15}>
          <span className={styles.label}>방위</span>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: 'jack', label: '남동' },
              { value: 'lucy', label: '남서' },
              { value: 'Yiminghe', label: '북서' },
              { value: 'disabled', label: '북동' },
            ]}
          />
        </Flex>
      </Flex>

      {thermalItems[0].children.map((item, index) => (
        <div style={{ marginLeft: '-27px' }}>
          <EditSlider {...item} />
        </div>
      ))}
    </div>
  );
};

export default SolarPowerSystem;
