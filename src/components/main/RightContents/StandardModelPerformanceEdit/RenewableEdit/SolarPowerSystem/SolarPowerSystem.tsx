'use client';

import styles from './SolarPowerSystem.module.scss';
import { Flex, Rate, Select } from 'antd';
import EditSlider from '@/components/main/RightContents/StandardModelPerformanceEdit/shared/EditSlider/EditSlider';

const thermalItems = [
  {
    id: 'solarPowerSystem',
    type: 'template2',
    title: '태양광 발전 시스템',
    rate: 2,
    children: [
      {
        id: 'installationCapacity',
        type: 'template2',
        start: 297.5,
        min: 0,
        max: 595,
        step: 0.01,
        average: 297.5,
        rate: 1,
        unit: '%',
        subDescription: '설치 용량',
      },
      {
        id: 'generationEfficiency',
        type: 'template2',
        start: 0.175,
        min: 0.1,
        max: 0.25,
        step: 0.01,
        average: 0.175,
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
              { value: 'jack', label: '0º (수평)' },
              { value: 'lucy', label: '45º' },
              { value: 'Yiminghe', label: '90º (수직)' },
            ]}
          />
        </Flex>
        <Flex justify="center" align={'center'} gap={15}>
          <span className={styles.label}>방위</span>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: 'jack', label: '동' },
              { value: 'lucy', label: '남동' },
              { value: 'Yiminghe', label: '남' },
              { value: 'disabled', label: '남서' },
              { value: 'disabled2', label: '서' },
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
