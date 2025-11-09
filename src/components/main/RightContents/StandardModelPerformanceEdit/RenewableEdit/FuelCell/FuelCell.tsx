'use client';

import styles from './FuelCell.module.scss';
import {
  ConfigProvider,
  Flex,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  SliderSingleProps,
  theme,
} from 'antd';
import { useState } from 'react';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';
import { CheckboxGroupProps } from 'antd/es/checkbox';

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
const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: 'PEMFC', value: 'Apple', className: 'label-1' },
  { label: 'SOFC', value: 'Pear', className: 'label-2' },
];

const onChangeValue = (newValue: number) => {};

const FuelCell = (props: any) => {
  const [value, setValue] = useState([0, 26, 37]);

  const start = value[0] / 100;
  const end = value[value.length - 1] / 100;

  const list = ['열생산 능력', '열생산 효율', '발전 효율'];

  return (
    <div className={styles.editWrap}>
      <Flex
        justify="space-between"
        align={'center'}
        style={{ position: 'relative' }}
      >
        <span className={styles.editTitle}>연료전지</span>
        <Rate disabled defaultValue={3} count={3} />
        <div className={styles.fuelCellRadio}>
          <Radio.Group
            options={optionsWithDisabled}
            optionType="button"
            value={'Apple'}
            buttonStyle="solid"
            size="small"
          />
        </div>
      </Flex>

      {list.map((item, index) => (
        <>
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
              {item}
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
        </>
      ))}
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

export default FuelCell;
