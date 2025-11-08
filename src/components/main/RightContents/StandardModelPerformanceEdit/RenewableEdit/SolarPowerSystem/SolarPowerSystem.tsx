'use client';

import styles from './SolarPowerSystem.module.scss';
import {
  Flex,
  InputNumber,
  Rate,
  Select,
  Slider,
  SliderSingleProps,
} from 'antd';
import { useState } from 'react';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';

const marks: SliderSingleProps['marks'] = {
  0: '개선',
  26: '표준',
  100: {
    style: {
      color: '#4E4E4E',
    },
    label: '저하',
  },
};

const onChangeValue = (newValue: number) => {};

const SolarPowerSystem = (props: any) => {
  const [value, setValue] = useState([0, 26, 37]);

  const start = value[0] / 100;
  const end = value[value.length - 1] / 100;

  return (
    <div className={styles.editWrap}>
      <Flex justify="space-between" align={'center'}>
        <span className={styles.editTitle}>태양광 발전 시스템</span>
        <Rate disabled defaultValue={3} count={3} />
      </Flex>
      <Flex gap={20} style={{ marginTop: '42px' }}>
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

      <Flex className={styles.sliderWrapper}>
        <div>
          <Slider
            marks={marks}
            defaultValue={26}
            onChange={onChangeValue}
            className={styles.sliderClass}
            styles={{
              track: {
                background: 'transparent',
              },
              tracks: {
                background: `linear-gradient(to right, ${getGradientColor(start)} 0%, ${getGradientColor(
                  end,
                )} 100%)`,
              },
            }}
          />
        </div>
        <div
          className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
        >
          설치 용량
        </div>
        <div>
          <InputNumber min={0} max={100} defaultValue={26} />
          <div className={styles.sliderNumberUnit}>[kW]</div>
        </div>
      </Flex>
      <div className={styles.controller}>
        <Flex gap={10} justify="right">
          <SyncOutlined />
          <div className={styles.enhance}>
            <CaretDownOutlined />
            <span>0.24</span>개선
          </div>
        </Flex>
      </div>
      <Flex className={styles.sliderWrapper}>
        <div>
          <Slider
            marks={marks}
            defaultValue={26}
            onChange={onChangeValue}
            className={styles.sliderClass}
            styles={{
              track: {
                background: 'transparent',
              },
              tracks: {
                background: `linear-gradient(to right, ${getGradientColor(start)} 0%, ${getGradientColor(
                  end,
                )} 100%)`,
              },
            }}
          />
        </div>
        <div
          className={`${styles.typeTextWrapper} ${styles.typeTextEfficiency}`}
        >
          발전 효율
        </div>
        <div>
          <InputNumber min={0} max={100} defaultValue={26} />
          <div className={styles.sliderNumberUnit}>[%]</div>
        </div>
      </Flex>
      <div className={styles.controller}>
        <Flex gap={10} justify="right">
          <SyncOutlined />
          <div className={styles.enhance}>
            <CaretDownOutlined />
            <span>0.24</span>개선
          </div>
        </Flex>
      </div>
    </div>
  );
};

const getGradientColor = (percentage: number) => {
  const startColor = [42, 78, 81];
  const endColor = [213, 250, 252];

  const midColor = startColor.map((start, i) => {
    const end = endColor[i];
    const delta = end - start;
    return (start + delta * percentage).toFixed(0);
  });

  return `rgb(${midColor.join(',')})`;
};

export default SolarPowerSystem;
